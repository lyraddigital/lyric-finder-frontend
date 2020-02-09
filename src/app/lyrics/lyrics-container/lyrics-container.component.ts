import { Component, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

import { LyricsService } from 'src/app/core/lyrics/lyrics.service';
import { LoadingService } from 'src/app/core/loading/loading.service';
import { LoaderState } from 'src/app/core/models/loader-state';

@Component({
  selector: 'app-lyrics-container',
  templateUrl: './lyrics-container.component.html',
  styleUrls: ['./lyrics-container.component.scss']
})
export class LyricsContainerComponent implements OnInit {
  lyrics: SafeHtml;
  showError: boolean;
  isLoading: boolean;

  constructor(
    private readonly lyricsService: LyricsService,
    private readonly loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.loadingService.loaderStateChange().subscribe(state => {
      this.isLoading = state === LoaderState.Opened;
    });
  }
}
