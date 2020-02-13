import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { SearchResultItem } from 'src/app/songs/search/models/search-result-item';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  @Input() searchResults$: Observable<Array<SearchResultItem>>;
}
