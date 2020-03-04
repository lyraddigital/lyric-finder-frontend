import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SearchService } from '../../search.service';
import { SearchResultItem } from '../../models';

@Component({
  templateUrl: './search-results-container.component.html',
  styleUrls: ['./search-results-container.component.scss']
})
export class SearchResultsContainerComponent implements OnInit, OnDestroy {
  searchResults$: Observable<Array<SearchResultItem>>;
  componentDestroyed$: Subject<any>;
  emptySearch = true;

  constructor(
    private readonly searchService: SearchService,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.componentDestroyed$ = new Subject<any>();
    // this.activatedRoute.params.pipe(
    //   debounceTime(200),
    //   takeUntil(this.componentDestroyed$)
    // ).subscribe(p => {
    //   this.emptySearch = !(p && p.searchTerm);

    //   if (!this.emptySearch) {
    //     const searchTerm = p.searchTerm as string;
    //   }
    // });

    this.searchResults$ = this.searchService.searchResultsChanged().pipe(
      takeUntil(this.componentDestroyed$)
    );
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
