import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { LyradApiResult } from 'src/app/core/lyrics/models/lyric-api-result';
import { LyricResult } from 'src/app/core/models/lyric-result';
import { FetchResult } from 'src/app/core/models/fetch-result';

@Injectable({
  providedIn: 'root'
})
export class LyricsService {
  constructor(
    private readonly http: HttpClient,
    private readonly santizer: DomSanitizer
  ) {}

  searchLyricsForSong(artist: string, title: string): Observable<FetchResult<LyricResult>> {
    return this.http.get<LyradApiResult>(`${artist}/${title}`).pipe(
      map(result => this.formatLyricsToMarkup(result.lyrics)),
      catchError(this.handleError)
    );
  }

  private formatLyricsToMarkup(unformattedLyrics: string): FetchResult<LyricResult> {
    return {
      success: true,
      result: {
        found: true,
        lyrics: this.santizer.bypassSecurityTrustHtml(unformattedLyrics.replace(/\n/g, '<br />')),
      },
      errorMessage: ''
    };
  }

  private handleError(err: any): Observable<FetchResult<LyricResult>> {
    const result = {
      result: undefined,
      success: false,
      errorMessage: 'Error fetching lyrics'
    };

    if (err instanceof HttpErrorResponse) {
      result.success = true;
      result.errorMessage = '';
    }

    return of(result);
  }
}
