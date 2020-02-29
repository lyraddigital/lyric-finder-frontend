import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {
  constructor(private readonly router: Router) { }

  performSearch(searchTerm: string): void {
    this.router.navigateByUrl(`/search/${searchTerm || '' }`);
  }
}
