import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { LoadingService } from 'src/app/core/loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class AjaxRequestLoaderService {
  constructor(private pageLoaderService: LoadingService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.pageLoaderService.start();

    return next.handle(req).pipe(finalize(() => {
        this.pageLoaderService.stop();
    }));
  }
}
