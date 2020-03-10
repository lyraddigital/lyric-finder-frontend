import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { HistoryService } from '../history';

@Injectable({
  providedIn: 'root'
})
export class SearchFormService {
  private showSearchFormSubject$: Subject<boolean>;
  private searchFieldUpdatedSubject$: Subject<string>;
  private searchFieldRefreshedSubject$: Subject<string>;
  private previousSearchTerm = '';

  constructor(
    private readonly router: Router,
    private readonly historyService: HistoryService
  ) {
    this.showSearchFormSubject$ = new Subject<boolean>();
    this.searchFieldUpdatedSubject$ = new Subject<string>();
    this.searchFieldRefreshedSubject$ = new Subject<string>();
  }

  onSearchFormVisibilityChanged(): Observable<boolean> {
    return this.showSearchFormSubject$;
  }

  onSearchFieldRefreshed(): Observable<string> {
    return this.searchFieldRefreshedSubject$;
  }

  onSearchFieldUpdated(): Observable<string> {
    return this.searchFieldUpdatedSubject$;
  }

  triggerSearchTermUpdate(searchTerm: string): void {
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
      this.historyService.updateRecentHistoryWithTerm(searchTerm);
      this.searchFieldUpdatedSubject$.next(searchTerm);
    }

    this.previousSearchTerm = searchTerm;
  }

  updateSearchFieldWithTerm(searchTerm: string): void {
    this.searchFieldRefreshedSubject$.next(searchTerm);
  }

  toggleFormVisibility(isVisible: boolean) {
    this.showSearchFormSubject$.next(isVisible);
  }
}
