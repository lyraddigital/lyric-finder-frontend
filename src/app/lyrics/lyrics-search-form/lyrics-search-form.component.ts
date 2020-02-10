import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LyricsSearchCriteria } from 'src/app/lyrics/models';

@Component({
  selector: 'app-lyrics-search-form',
  templateUrl: './lyrics-search-form.component.html',
  styleUrls: ['./lyrics-search-form.component.scss']
})
export class LyricsSearchFormComponent implements OnInit {
  @Output() formSubmitted = new EventEmitter<LyricsSearchCriteria>();
  lyricsFormGroup: FormGroup;
  artistFieldControl: AbstractControl;
  titleFieldControl: AbstractControl;

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.lyricsFormGroup = this.formBuilder.group({
      artist: ['', Validators.required],
      title: ['', Validators.required]
    });

    this.artistFieldControl = this.lyricsFormGroup.get('artist');
    this.titleFieldControl = this.lyricsFormGroup.get('title');
  }

  performSearch() {
    if (this.lyricsFormGroup.valid) {
      const searchCriteria = this.lyricsFormGroup.value as LyricsSearchCriteria;

      this.artistFieldControl.setValue(null, { emitEvent: false });
      this.artistFieldControl.markAsPristine();
      this.artistFieldControl.markAsUntouched();
      this.titleFieldControl.setValue(null, { emitEvent: false });

      this.formSubmitted.emit(searchCriteria);
    }
  }

  get isSubmitButtonDisabled() {
    return false;
  }

  // private toggleFields() {
  //   if (this.isLoading) {
  //     this.artistFieldControl.disable();
  //     this.titleFieldControl.disable();
  //   } else {
  //     this.artistFieldControl.enable();
  //     this.titleFieldControl.enable();
  //   }
  // }
}
