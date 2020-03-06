import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SearchService } from '../../search.service';
import { SearchResultItem } from '../../models';

@Component({
  templateUrl: './search-results-container.component.html',
  styleUrls: ['./search-results-container.component.scss'],
  providers: [SearchService]
})
export class SearchResultsContainerComponent implements OnInit, OnDestroy {
  searchResults$: Observable<Array<SearchResultItem>>;
  componentDestroyed$: Subject<any>;
  emptySearch = true;

  constructor(
    private readonly searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.componentDestroyed$ = new Subject<any>();

    this.searchResults$ = this.searchService.onSearchResultsChanged().pipe(
      takeUntil(this.componentDestroyed$)
    );
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
