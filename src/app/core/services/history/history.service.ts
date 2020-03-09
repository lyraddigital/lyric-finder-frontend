import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter, scan } from 'rxjs/operators';

import { HistoryEntry, NavigationEvent, NavigationState } from '../../models';

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
      scan<NavigationStart | NavigationEnd, NavigationEvent>((acc, e) => {
        if (e instanceof NavigationStart) {
          return this.getNavigationEventFromNavigationStart(e as NavigationStart);
        } else {
          if (acc.trigger === 'popstate') {
            this.updateHistoryBasedOnPoppedState(acc);
          } else if (acc.trigger === 'imperative') {
            this.updateHistoryBasedOnImperitiveAction(acc, e as NavigationEnd);
          }

          return acc;
        }
      }, this.getDefaultNavigationEvent()),
    ).subscribe(this.triggerNavigationStateChanged);
  }

  private getDefaultNavigationEvent(): NavigationEvent {
    return {
      navigationId: undefined,
      trigger: undefined,
      popStateNavigationId: undefined
    };
  }

  private getNavigationEventFromNavigationStart(navStart: NavigationStart): NavigationEvent {
    const popStateNavigationId = navStart.restoredState && navStart.restoredState.navigationId ?
      navStart.restoredState.navigationId
      : undefined;

    return {
      trigger: navStart.navigationTrigger,
      navigationId: navStart.id,
      popStateNavigationId
    };
  }

  private updateHistoryBasedOnPoppedState(event: NavigationEvent): void {
    this.currentIndex = event.popStateNavigationId ? this.history.findIndex(he => he.navigationId === event.popStateNavigationId) : 0;

    if (this.currentIndex >= 0) {
      this.history[this.currentIndex].navigationId = event.navigationId;
    }
  }

  private updateHistoryBasedOnImperitiveAction(event: NavigationEvent, endNav: NavigationEnd): void {
    this.history.splice(this.currentIndex + 1);
    this.history.push({ navigationId: event.navigationId, url: endNav.urlAfterRedirects });

    this.currentIndex = this.history.length - 1;
  }

  private triggerNavigationStateChanged(): void {
    const navState: NavigationState = {
      canGoBack: false,
      canGoForward: false
    };

    if (this.history.length !== 0) {
      navState.canGoBack = this.currentIndex > 0;
      navState.canGoForward = this.currentIndex < (this.history.length - 1);
    }

    this.navigationStateChanged.next(navState);
  }
}
