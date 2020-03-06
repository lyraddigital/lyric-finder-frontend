import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

import { SearchFormService } from '../core/search-form.service';
import { SearchResultItem } from './models';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly searchFormService: SearchFormService
  ) {}

  onSearchResultsChanged(): Observable<Array<SearchResultItem>> {
    return this.searchFormService.onSearchFieldUpdated().pipe(
      switchMap(searchTerm => this.getResultsFromApi(searchTerm))
    );
  }

  private getResultsFromApi(searchTerm: string): Observable<Array<SearchResultItem>> {
    const query = encodeURIComponent(searchTerm);

    return this.httpClient.get(`/search?q=${query}`).pipe(
      take(1),
      map((response: any) => {
        if (!response || !response.data) {
          return [];
        }

        return response.data.map(r => ({
          songTitle: r.title_short,
          artist: r.artist && r.artist.name ? r.artist.name : '',
          smallThumbnailSrc: r.album && r.album.cover_small ? r.album.cover_small : '',
          largeThumbnailSrc: r.album && r.album.cover_medium ? r.album.cover_medium : ''
        }));
      })
    );
  }
}
