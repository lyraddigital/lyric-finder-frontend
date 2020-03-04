import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { SearchResultItem } from './models';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private previousSearchTerm = '';
  private searchResultsChangedSubject = new Subject<Array<SearchResultItem>>();

  constructor(
    private readonly router: Router,
    private readonly location: Location,
    private readonly httpClient: HttpClient
  ) {}

  performSearch(searchTerm: string): void {
    const currentSearchTermIsEmpty = !searchTerm || searchTerm.length === 0;
    const previousSearchTermIsEmpty = !this.previousSearchTerm || this.previousSearchTerm.length === 0;

    if (!currentSearchTermIsEmpty && previousSearchTermIsEmpty) {
      this.router.navigateByUrl(`/search/results/${searchTerm}`);
    } else if (currentSearchTermIsEmpty) {
      this.router.navigateByUrl('/search/start');
    } else {
      // We don't change the route, as it will force this component to refresh. We also
      // don't want to maintain a history in the browser. By just replacing the state in history
      // we achieve both objectives.
      this.location.replaceState(`/search/results/${searchTerm}`);
    }

    this.previousSearchTerm = searchTerm;
  }

  configureSearch(searchTerm: string): void {
    const query = encodeURIComponent(searchTerm);

    this.httpClient.get(`/search?q=${query}`).pipe(
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
