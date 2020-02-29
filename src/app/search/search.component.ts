import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  constructor(private readonly router: Router) { }

  performSearch(searchTerm: string): void {
    this.router.navigateByUrl(`/search/${searchTerm || '' }`);
  }
}
