import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { SearchService } from './search.service';
import { SearchResultItem } from './models/search-result-item';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchResults$: Observable<Array<SearchResultItem>>;

  constructor(private searchService: SearchService) { }

  performSearch(searchTerm: string) {
    this.searchResults$ = this.searchService.getSearchResults(searchTerm);
  }
}
