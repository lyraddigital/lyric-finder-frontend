import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { SearchResultItem } from './models';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchResultsChangedSubject = new Subject<Array<SearchResultItem>>();

  constructor(private httpClient: HttpClient) {}

  performSearch(searchTerm: string) {
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
    ).subscribe(songs => {
      this.searchResultsChangedSubject.next(songs);
    });
  }

  searchResultsChanged(): Observable<Array<SearchResultItem>> {
    return this.searchResultsChangedSubject.asObservable();
  }
}
