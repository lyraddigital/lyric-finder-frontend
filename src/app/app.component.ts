import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ldsc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private readonly router: Router) { }

  performSearch(searchTerm: string): void {
    if (searchTerm && searchTerm.length > 0) {
      this.router.navigateByUrl(`/search/results/${searchTerm}`);
    } else {
      this.router.navigateByUrl('/search/start');
    }
  }
}
