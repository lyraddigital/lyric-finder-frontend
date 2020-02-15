import { NgModule, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS  } from '@angular/common/http';

import { API_KEY, API_DOMAIN_NAME, BaseUrlInterceptor } from 'src/app/api/utils';

@NgModule({})
export class ApiModule {
    static configureApiUrl(apiDomainName: string, apiKey: string): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [
                { provide: API_KEY, useValue: apiKey },
                { provide: API_DOMAIN_NAME, useValue: apiDomainName },
                { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true }
            ]
        };
    }
 }
