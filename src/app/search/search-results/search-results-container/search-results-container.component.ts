import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { SearchService } from 'src/app/search/search.service';
import { SearchResultItem } from 'src/app/search/models/search-result-item';

@Component({
  selector: 'app-search-results-container',
  templateUrl: './search-results-container.component.html',
  styleUrls: ['./search-results-container.component.scss']
})
export class SearchResultsContainerComponent implements OnInit {
  searchResults$: Observable<Array<SearchResultItem>>;
  emptySearch = true;

  constructor(
    private readonly searchService: SearchService,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      debounceTime(200)
    ).subscribe(p => {
      this.emptySearch = !(p && p.searchTerm);

      if (!this.emptySearch) {
        const searchTerm = p.searchTerm as string;
        this.searchResults$ = this.searchService.getSearchResults(searchTerm);
      }
    });
  }

}
