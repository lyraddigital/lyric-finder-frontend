import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'ldsc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  initialSearchTerm = 'test';

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    let route = this.router.routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    console.log(route.snapshot);
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
    if (searchTerm && searchTerm.length > 0) {
      this.router.navigateByUrl(`/search/results/${searchTerm}`);
    } else {
      this.router.navigateByUrl('/search/start');
    }
  }
}
