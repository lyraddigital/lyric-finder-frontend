import { Component, Input } from '@angular/core';

import { SearchResultItem } from 'src/app/search/models/search-result-item';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss']
})
export class SearchResultListComponent {
  @Input() searchResults: Array<SearchResultItem>;
}
