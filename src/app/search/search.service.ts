import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { SearchResultItem } from './models/search-result-item';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private httpClient: HttpClient) {}

  getSearchResults(searchTerm: string): Observable<Array<SearchResultItem>> {
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
