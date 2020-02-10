import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

import { LyricsSearchCriteria } from 'src/app/lyrics/models';

@Component({
  selector: 'app-lyrics-search-form',
  templateUrl: './lyrics-search-form.component.html',
  styleUrls: ['./lyrics-search-form.component.scss']
})
export class LyricsSearchFormComponent implements OnInit {
  @Output() formSubmitted = new EventEmitter<LyricsSearchCriteria>();
  @ViewChild(FormGroupDirective) lyricsForm: FormGroupDirective;

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
      this.lyricsForm.resetForm();

      this.formSubmitted.emit(searchCriteria);
    }
  }

  get isSubmitButtonDisabled() {
    return this.lyricsFormGroup.invalid;
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
