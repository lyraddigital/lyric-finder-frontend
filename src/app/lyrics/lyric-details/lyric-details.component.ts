import { Component, Input } from '@angular/core';

import { FetchResult } from 'src/app/api';
import { LyricResult } from 'src/app/lyrics/models';

@Component({
  selector: 'app-lyric-details',
  templateUrl: './lyric-details.component.html',
  styleUrls: ['./lyric-details.component.scss']
})
export class LyricDetailsComponent {
  @Input() fetchResult: FetchResult<LyricResult>;
}
