import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { environment } from 'src/environments/environment';
import { ApiModule } from 'src/app/api';
import { LyricsModule } from 'src/app/lyrics';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { SearchComponent } from './songs/search/search.component';
import { SearchStartComponent } from './songs/search/search-start/search-start.component';
import { SearchResultsComponent } from './songs/search/search-results/search-results.component';
import { SearchResultItemComponent } from './songs/search/search-results/search-result-item/search-result-item.component';
import { ActionButtonsComponent } from './shared/layout/action-buttons/action-buttons.component';
import { SearchFormComponent } from './songs/search/search-form/search-form.component';

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
    MatToolbarModule,
    MatIconModule,
    ApiModule.configureApiUrl(environment.lyricApiEndpoint),
    LyricsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
