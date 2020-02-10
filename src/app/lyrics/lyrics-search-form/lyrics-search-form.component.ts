import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lyrics-search-form',
  templateUrl: './lyrics-search-form.component.html',
  styleUrls: ['./lyrics-search-form.component.scss']
})
export class LyricsSearchFormComponent implements OnInit {
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
      const artist = this.artistFieldControl.value;
      const title = this.titleFieldControl.value;

      this.artistFieldControl.setValue(null, { emitEvent: false });
      this.artistFieldControl.markAsPristine();
      this.artistFieldControl.markAsUntouched();
      this.titleFieldControl.setValue(null, { emitEvent: false });

      // this.lyricsService.searchLyricsForSong(artist, title).subscribe(
      //   result => {
      //     this.showError = false;
      //     this.lyricsFound = result.found;
      //     this.lyrics = result.lyrics;
      //   },
      //   _ => {
      //     this.showError = true;
      //   }
      // );
    }
  }

  get isSubmitButtonDisabled() {
    // return this.isLoading || this.lyricsFormGroup.invalid;
    return true;
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
