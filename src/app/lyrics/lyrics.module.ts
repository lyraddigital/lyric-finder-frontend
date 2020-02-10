import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LyricsService } from './lyrics.service';
import { LyricsSearchFormComponent } from 'src/app/lyrics/lyrics-search-form/lyrics-search-form.component';
import { LyricsContainerComponent } from 'src/app/lyrics/lyrics-container/lyrics-container.component';
import { LyricDetailsComponent } from 'src/app/lyrics/lyric-details/lyric-details.component';

@NgModule({
  declarations: [
    LyricsSearchFormComponent,
    LyricsContainerComponent,
    LyricDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    LyricsContainerComponent
  ],
  providers: [
    LyricsService
  ]
})
export class LyricsModule { }
