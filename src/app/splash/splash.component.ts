import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit, OnDestroy {
  private componentDestroyed$: Subject<any>;

  constructor(
    private readonly breakpointObserver: BreakpointObserver,
    private readonly routerService: Router
  ) { }

  ngOnInit(): void {
    const mediaQuery = '(min-width: 768px) and (orientation: portrait), (min-width: 824px) and (orientation: landscape)';

    this.componentDestroyed$ = new Subject<any>();
    this.breakpointObserver.observe(mediaQuery).pipe(
      takeUntil(this.componentDestroyed$)
    ).subscribe(
      observer => {
        if (observer.matches) {
          this.navigateToSearchPage();
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }

  navigateToSearchPage(): void {
    this.routerService.navigateByUrl('/search/');
  }
}
