import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'ldsc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  initialSearchTerm = 'test';
  private previousSearchTerm = this.initialSearchTerm;

  constructor(
    private readonly router: Router,
    private readonly location: Location
  ) { }

  ngOnInit() {
    // this.router.events.pipe(
    //   filter(e => e instanceof NavigationEnd),
    //   take(1)
    // ).subscribe(event => {
    //   console.log(event);
    // });
    // this.initialSearchTerm$ = new Subject<string>();
    // console.log(this.activatedRoute.snapshot);
    // this.activatedRoute.snapshot.params.pipe(
    //   take(1),
    // ).subscribe(p => {
    //   console.log(p);
    //   if (p && p.searchTerm) {
    //     this.initialSearchTerm$.next(p.searchTerm);
    //   } else {
    //     this.initialSearchTerm$.next(null);
    //   }
    // });
  }

  performSearch(searchTerm: string): void {
    const currentSearchTermIsNotEmpty = searchTerm && searchTerm.length > 0;
    const previousSearchTermIsNotEmpty = this.previousSearchTerm && this.previousSearchTerm.length > 0;

    if (currentSearchTermIsNotEmpty && !previousSearchTermIsNotEmpty) {
      this.router.navigateByUrl(`/search/results/${searchTerm}`);
    } else if (!currentSearchTermIsNotEmpty) {
      this.router.navigateByUrl('/search/start');
    } else {
      this.location.replaceState(`/search/results/${searchTerm}`);
    }

    this.previousSearchTerm = searchTerm;
  }
}
