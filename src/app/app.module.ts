import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { environment } from 'src/environments/environment';
import { ApiModule } from 'src/app/api';
import { LyricsModule } from 'src/app/lyrics';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    ApiModule.configureApiUrl(environment.lyricApiEndpoint),
    LyricsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
