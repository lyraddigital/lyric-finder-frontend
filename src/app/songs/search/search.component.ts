import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  emptySearch = true;

  constructor(
    private searchService: SearchService,
    private router: Router
  ) { }

  performSearch(searchTerm: string) {
    this.emptySearch = !searchTerm || searchTerm.length === 0;
    this.router.navigateByUrl(`/search/${searchTerm}`);

    this.searchResults$ = this.searchService.getSearchResults(searchTerm);
  }
}
