import { Component, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LyricsService } from 'src/app/core/lyrics/lyrics.service';
import { LoadingService } from 'src/app/core/loading/loading.service';
import { LoaderState } from './core/models/loader-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  formSubmitted: boolean;
  lyricsFound: boolean;
  lyrics: SafeHtml;
  showError: boolean;
  isLoading: boolean;
  lyricsFormGroup: FormGroup;
  artistFieldControl: AbstractControl;
  titleFieldControl: AbstractControl;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly lyricsService: LyricsService,
    private readonly loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.lyricsFormGroup = this.formBuilder.group({
      artist: ['', Validators.required],
      title: ['', Validators.required]
    });

    this.artistFieldControl = this.lyricsFormGroup.get('artist');
    this.titleFieldControl = this.lyricsFormGroup.get('title');

    this.loadingService.loaderStateChange().subscribe(state => {
      this.isLoading = state === LoaderState.Opened;
      this.toggleFields();
    });
  }

  performSearch() {
    if (this.lyricsFormGroup.valid) {
      const artist = this.artistFieldControl.value;
      const title = this.titleFieldControl.value;
      
      this.artistFieldControl.setValue(null, { emitEvent: false });
      this.artistFieldControl.markAsPristine();
      this.artistFieldControl.markAsUntouched();
      this.titleFieldControl.setValue(null, { emitEvent: false });

      this.lyricsService.searchLyricsForSong(artist, title).subscribe(
        result => {
          this.showError = false;
          this.lyricsFound = result.found;
          this.lyrics = result.lyrics;
        },
        _ => {
          this.showError = true;
        }
      );
    }
  }

  get isSubmitButtonDisabled() {
    return this.isLoading || this.lyricsFormGroup.invalid;
  }

  private toggleFields() {
    if (this.isLoading) {
      this.artistFieldControl.disable();
      this.titleFieldControl.disable();
    } else {
      this.artistFieldControl.enable();
      this.titleFieldControl.enable();
    }
  }
}
