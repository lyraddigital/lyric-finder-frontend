import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter, scan } from 'rxjs/operators';

import { HistoryEntry, NavigationState } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private navigationStateChanged: Subject<NavigationState>;
  private history: Array<HistoryEntry>;
  private currentIndex: number;

  constructor(private router: Router) {
    this.history = [];
    this.currentIndex = 0;
    this.navigationStateChanged = new Subject<NavigationState>();

    this.watchRouteEvents();
  }

  onNavigationStateChanged(): Observable<NavigationState> {
    return this.navigationStateChanged.asObservable();
  }

  private watchRouteEvents(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationStart || e instanceof NavigationEnd),
      scan<NavigationStart | NavigationEnd, any>((acc, e) => {
        if (e instanceof NavigationStart) {
          const navStart = e as NavigationStart;
          const popStateNavigationId = navStart.restoredState && navStart.restoredState.navigationId ?
            navStart.restoredState.navigationId
            : undefined;

          return {
            trigger: navStart.navigationTrigger,
            navigationId: navStart.id,
            popStateNavigationId
          };
        } else {
          if (acc.trigger === 'popstate') {
            this.currentIndex = acc.popStateNavigationId ? this.history.findIndex(he => he.navigationId === acc.popStateNavigationId) : 0;

            if (this.currentIndex >= 0) {
              this.history[this.currentIndex].navigationId = acc.navigationId;
            }
          } else if (acc.trigger === 'imperative') {
            this.history.splice(this.currentIndex + 1);
            this.history.push({ navigationId: acc.navigationId, url: undefined });

            this.currentIndex = this.history.length - 1;
          }

          return { navigationId: acc.navigationId, popStateNavigationId: acc.ppopStateNavigationIdop, url: undefined };
        }
      }, { navigationId: undefined, url: undefined }),
    ).subscribe(() => {
      const navState: NavigationState = {
        canGoBack: false,
        canGoForward: false
      };

      if (this.history.length !== 0) {
        navState.canGoBack = this.currentIndex > 0;
        navState.canGoForward = this.currentIndex < (this.history.length - 1);
      }

      this.navigationStateChanged.next(navState);
    });
  }
}


/*
  history requires
    - id of the current navigation entry
    - popstateid if this is a popstate

  when doing just a popstate,
    - find the entry in the history where the id matches the popstate id
    - once found replace the id with the new id of the current event
    - return the url and the current index

  when doing an imperative change
    - remove all entries from the current index to the end of the history
    - add the new entry to the array
*/
