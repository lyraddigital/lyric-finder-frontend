import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

export const API_DOMAIN_NAME = 'API_DOMAIN_NAME';
export const API_KEY = 'API_KEY';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
    constructor(
      @Inject(API_DOMAIN_NAME) private apiDomainName: string,
      @Inject(API_KEY) private apiKey: string
    ) {  }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const apiReq = request.clone({
          url: `https://${this.apiDomainName}${request.url}`,
          headers: new HttpHeaders({
            'X-RapidAPI-Host': this.apiDomainName,
            'X-RapidAPI-Key': this.apiKey
          })
        });

        return next.handle(apiReq).pipe(
          retry(2)
        );
    }
}
