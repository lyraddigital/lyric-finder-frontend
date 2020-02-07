import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { LyradApiResult } from 'src/app/core/lyrics/models/lyric-api-result';
import { LyricResult } from 'src/app/core/models/lyric-result';

@Injectable({
  providedIn: 'root'
})
export class LyricsService {
  constructor(
    private readonly http: HttpClient,
    private readonly santizer: DomSanitizer
  ) {}

  searchLyricsForSong(artist: string, title: string): Observable<LyricResult> {
    return this.http.get<LyradApiResult>(`${artist}/${title}`).pipe(
      map(result => this.formatLyricsToMarkup(result.lyrics)),
      catchError(this.handleError)
    );
  }

  private formatLyricsToMarkup(unformattedLyrics: string): LyricResult {
    return {
      found: true,
      lyrics: this.santizer.bypassSecurityTrustHtml(unformattedLyrics.replace(/\n/g, '<br />'))
    }
  }

  private handleError(err: any): Observable<LyricResult> {
    if (err instanceof HttpErrorResponse) {
      return of({
        lyrics: undefined,
        found: false
      });
    }

    return throwError(err);
  }
}
