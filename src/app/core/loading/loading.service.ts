import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { LoaderState } from '../models/loader-state';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loaderStateChangeSubject = new Subject<LoaderState>();

  loaderStateChange(): Observable<LoaderState> {
      return this.loaderStateChangeSubject.asObservable();
  }

  start() {
      this.loaderStateChangeSubject.next(LoaderState.Opened);
  }

  stop() {
      this.loaderStateChangeSubject.next(LoaderState.Closed);
  }
}
