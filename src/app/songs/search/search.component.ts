import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  constructor(private readonly router: Router) { }

  performSearch(searchTerm: string) {
    this.router.navigateByUrl(`/search/${searchTerm || '' }`);
  }
}
