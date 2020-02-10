import { NgModule, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS  } from '@angular/common/http';

import { BASE_API_URL, BaseUrlInterceptor } from 'src/app/api/utils';

@NgModule({})
export class ApiModule {
    static configureApiUrl(apiUrl: string): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [
                { provide: BASE_API_URL, useValue: apiUrl },
                { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true }
            ]
        };
    }
 }
