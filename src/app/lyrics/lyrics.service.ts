import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { FetchResult } from 'src/app/api';
import { LyricApiResult, LyricResult } from 'src/app/lyrics/models';

@Injectable()
export class LyricsService {
  constructor(
    private readonly http: HttpClient,
    private readonly santizer: DomSanitizer
  ) {}

  searchLyricsForSong(artist: string, title: string): Observable<FetchResult<LyricResult>> {
    return this.http.get('https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem', {
      headers: {
        'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
        'x-rapidapi-key': '5bbc7ff12amsh9cc0cf2626ff24ep157130jsn49b474194ca6'
      }
    }).pipe(
      map(res => {
        console.log(res);
        return ({ success: false, result: undefined, errorMessage: 'testing' });
      }),
      catchError(this.handleError)
    );
    // return this.http.get<LyricApiResult>(`${artist}/${title}`).pipe(
    //   map(result => this.formatLyricsToMarkup(result.lyrics)),
    //   catchError(this.handleError)
    // );
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
      result: {
        found: false,
        lyrics: undefined
      },
      success: false,
      errorMessage: 'Error fetching lyrics'
    };

    if (err instanceof HttpErrorResponse && err.status === 404) {
      result.success = true;
      result.errorMessage = '';
    }

    return of(result);
  }
}
