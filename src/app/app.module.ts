import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { ApiModule } from 'src/app/api';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { SearchComponent } from './songs/search/search.component';
import { SearchStartComponent } from './songs/search/search-start/search-start.component';
import { SearchResultsComponent } from './songs/search/search-results/search-results.component';
import { SearchResultItemComponent } from './songs/search/search-results/search-result-item/search-result-item.component';
import { ActionButtonsComponent } from './shared/layout/action-buttons/action-buttons.component';
import { SearchFormComponent } from './songs/search/search-form/search-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    SearchComponent,
    SearchStartComponent,
    SearchResultsComponent,
    SearchResultItemComponent,
    ActionButtonsComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    ApiModule.configureApiUrl(environment.deezerRapidApiDomainName, environment.deezerRapidApiKey),
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
