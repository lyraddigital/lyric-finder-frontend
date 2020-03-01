import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {
  constructor(private readonly router: Router) { }

  performSearch(searchTerm: string): void {
    if (searchTerm && searchTerm.length > 0) {
      this.router.navigateByUrl(`/search/results/${searchTerm}`);
    } else {
      this.router.navigateByUrl('/search/start');
    }
  }
}
