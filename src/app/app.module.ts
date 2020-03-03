import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { SharedModule } from './shared';
import { ApiModule } from 'src/app/api';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { SplashComponent } from 'src/app/splash';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    ApiModule.configureApiUrl(environment.deezerRapidApiDomainName, environment.deezerRapidApiKey),
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
