import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, merge, of } from 'rxjs';
import { catchError, debounceTime, map, switchMap, take } from 'rxjs/operators';

import { SearchFormService, FetchResult, SongApiResult } from 'src/app/core';
import { SearchResultItem } from './models';

@Injectable()
export class SearchService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly searchFormService: SearchFormService
  ) {}

  onSearchResultsChanged(): Observable<FetchResult<Array<SearchResultItem>>> {
    const searchFieldUpdated$ = this.searchFormService.onSearchFieldUpdated().pipe(
      debounceTime(350)
    );

    const searchFieldRefreshed$ = this.searchFormService.onSearchFieldRefreshed();

    return merge(searchFieldUpdated$, searchFieldRefreshed$).pipe(
      switchMap(searchTerm => this.getResultsFromApi(searchTerm))
    );
  }

  private getResultsFromApi(searchTerm: string): Observable<FetchResult<Array<SearchResultItem>>> {
    const query = encodeURIComponent(searchTerm);

    return this.httpClient.get<SongApiResult>(`/search?q=${query}`).pipe(
      take(1),
      map<SongApiResult, FetchResult<Array<SearchResultItem>>>(this.mapSearchItems),
      catchError(this.handleApiErrors)
    );
  }

  private mapSearchItems(apiResult: SongApiResult): FetchResult<Array<SearchResultItem>> {
    const result: FetchResult<Array<SearchResultItem>> = {
      success: true,
      result: []
    };

    if (!apiResult || !apiResult.data) {
      return result;
    }

    result.result = apiResult.data.map(r => ({
      songTitle: r.title_short,
      artist: r.artist && r.artist.name ? r.artist.name : '',
      smallThumbnailSrc: r.album && r.album.cover_small ? r.album.cover_small : '',
      largeThumbnailSrc: r.album && r.album.cover_medium ? r.album.cover_medium : ''
    }));

    return result;
  }

  private handleApiErrors(_: any): Observable<FetchResult<Array<SearchResultItem>>> {
    return of({
      result: [],
      success: false
    });
  }
}
