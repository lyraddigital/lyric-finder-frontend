import { Component } from '@angular/core';

@Component({
  selector: 'app-lyric-details',
  templateUrl: './lyric-details.component.html',
  styleUrls: ['./lyric-details.component.scss']
})
export class LyricDetailsComponent {
  formSubmitted: boolean;
  lyricsFound: boolean;
}
