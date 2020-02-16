import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { ApiModule } from 'src/app/api';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    ApiModule.configureApiUrl(environment.deezerRapidApiDomainName, environment.deezerRapidApiKey),
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
