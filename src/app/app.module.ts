import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { ApiModule } from 'src/app/api';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { SplashComponent } from 'src/app/splash';
import { SearchPageComponent } from './search/layouts/search-page.component';
import { SharedModule } from './shared';
import { SearchFormComponent } from './search/search-form';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    SearchPageComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    ApiModule.configureApiUrl(environment.deezerRapidApiDomainName, environment.deezerRapidApiKey),
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
