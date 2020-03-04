import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { SearchService } from '../../search.service';

@Component({
  selector: 'ldsc-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent {
  initialSearchTerm = 'test';
  private previousSearchTerm = this.initialSearchTerm;

  constructor(
    private readonly router: Router,
    private readonly location: Location,
    private readonly searchService: SearchService
  ) { }

  performSearch(searchTerm: string): void {
    const currentSearchTermIsEmpty = !!searchTerm && searchTerm.length === 0;
    const previousSearchTermIsEmpty = !!this.previousSearchTerm && this.previousSearchTerm.length === 0;

    if (!currentSearchTermIsEmpty && previousSearchTermIsEmpty) {
      this.router.navigateByUrl(`/search/results/${searchTerm}`);
    } else if (currentSearchTermIsEmpty) {
      this.router.navigateByUrl('/search/start');
    } else {
      // We don't change the route, as it will force this component to refresh. We also
      // don't want to maintain a history in the browser. By just replacing the state in history
      // we achieve both objectives.
      this.location.replaceState(`/search/results/${searchTerm}`);
    }

    this.searchService.performSearch(searchTerm);

    this.previousSearchTerm = searchTerm;
  }

}
