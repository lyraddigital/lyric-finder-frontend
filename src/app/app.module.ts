import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { environment } from 'src/environments/environment';
import { BASE_API_URL, BaseUrlInterceptor } from './core/utils/base-url-interceptor.service';
import { AjaxRequestLoaderService } from './core/utils/ajax-request-loader.service';
import { AppComponent } from './app.component';
import { LyricsSearchFormComponent } from './lyrics/lyrics-search-form/lyrics-search-form.component';
import { LyricsContainerComponent } from './lyrics/lyrics-container/lyrics-container.component';
import { LyricDetailsComponent } from './lyrics/lyric-details/lyric-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LyricsSearchFormComponent,
    LyricsContainerComponent,
    LyricDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [
    { provide: BASE_API_URL, useValue: environment.lyricApiEndpoint },
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AjaxRequestLoaderService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
