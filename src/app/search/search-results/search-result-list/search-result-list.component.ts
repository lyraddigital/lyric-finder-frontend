import { Component, Input } from '@angular/core';

import { SearchResultItem } from '../../models';

@Component({
  selector: 'ldsc-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss']
})
export class SearchResultListComponent {
  @Input() searchResults: Array<SearchResultItem>;
}
