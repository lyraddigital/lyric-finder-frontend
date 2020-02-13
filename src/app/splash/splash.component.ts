import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit, OnDestroy { 
  constructor(
    private breakpointObserver: BreakpointObserver,
    private routerService: Router
  ) { }

  ngOnInit() {
    const mediaQuery = '(min-width: 768px) and (orientation: portrait), (min-width: 824px) and (orientation: landscape)';
    this.breakpointObserver.observe(mediaQuery).subscribe(
      observer => {
        if (observer.matches) {
          this.navigateToSearchPage();
        }
      }
    )
  }

  navigateToSearchPage() {
    this.routerService.navigateByUrl('/search');
  }

  ngOnDestroy() {

  }
}
