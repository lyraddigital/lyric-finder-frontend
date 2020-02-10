import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { FetchResult } from 'src/app/api';
import { LyricsService } from 'src/app/lyrics/lyrics.service';
import { LyricsSearchCriteria, LyricResult } from 'src/app/lyrics/models';

@Component({
  selector: 'app-lyrics-container',
  templateUrl: './lyrics-container.component.html',
  styleUrls: ['./lyrics-container.component.scss']
})
export class LyricsContainerComponent {
  $fetchLyrics: Observable<FetchResult<LyricResult>>;

  constructor(private readonly lyricsService: LyricsService) {}

  performSearch(searchCriteria: LyricsSearchCriteria) {
    this.$fetchLyrics = this.lyricsService.searchLyricsForSong(searchCriteria.artist, searchCriteria.title);
  }
}
