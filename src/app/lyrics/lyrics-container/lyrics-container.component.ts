import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LyricsService } from 'src/app/core/lyrics/lyrics.service';
import { FetchResult } from 'src/app/core/models/fetch-result';
import { LyricResult } from 'src/app/core/models/lyric-result';

@Component({
  selector: 'app-lyrics-container',
  templateUrl: './lyrics-container.component.html',
  styleUrls: ['./lyrics-container.component.scss']
})
export class LyricsContainerComponent implements OnInit {
  $fetchLyrics: Observable<FetchResult<LyricResult>>;

  constructor(
    private readonly lyricsService: LyricsService
  ) {}

  ngOnInit() {
    this.$fetchLyrics = this.lyricsService.searchLyricsForSong('Mandonna', 'Vogue');
  }
}
