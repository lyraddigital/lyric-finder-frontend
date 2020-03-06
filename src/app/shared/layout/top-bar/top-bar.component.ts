import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ldsc-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  @Input() searchFormGroup: FormGroup;
  @Input() showSearchClearButton: boolean;
  @Output() searchFormCleared = new EventEmitter();
}
