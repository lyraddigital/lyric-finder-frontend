import { Component, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

    this.loadingService.loaderStateChange().subscribe(state => {
      this.isLoading = state === LoaderState.Opened;
    });
  }

  performSearch() {
    if (this.lyricsFormGroup.valid) {
      const artist = this.lyricsFormGroup.get('artist').value;
      const title = this.lyricsFormGroup.get('title').value;

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
}
