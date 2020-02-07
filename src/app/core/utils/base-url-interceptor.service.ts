import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

export const BASE_API_URL = 'BASE_API_URL';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlInterceptor implements HttpInterceptor {
    constructor(@Inject(BASE_API_URL) private baseUrl: string) {  }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const apiReq = request.clone({ url: `${this.baseUrl}/${request.url}` });
        return next.handle(apiReq).pipe(
          retry(2)
        );
    }
}
