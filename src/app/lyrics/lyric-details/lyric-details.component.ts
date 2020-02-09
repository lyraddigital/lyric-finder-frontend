import { Component } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-lyric-details',
  templateUrl: './lyric-details.component.html',
  styleUrls: ['./lyric-details.component.scss']
})
export class LyricDetailsComponent {
  formSubmitted: boolean;
  lyricsFound: boolean;
  lyrics: SafeHtml;
  showError: boolean;
  isLoading: boolean;
}
