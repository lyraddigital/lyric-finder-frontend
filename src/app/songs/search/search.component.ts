import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { SearchService } from './search.service';
import { SearchResultItem } from './models/search-result-item';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchResults$: Observable<Array<SearchResultItem>>;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchResults$ = this.searchService.getSearchResults();
  }
}
