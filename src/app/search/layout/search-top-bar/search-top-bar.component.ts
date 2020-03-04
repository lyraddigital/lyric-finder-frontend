import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ldsc-search-top-bar',
  templateUrl: './search-top-bar.component.html',
  styleUrls: ['./search-top-bar.component.scss']
})
export class SearchTopBarComponent {
  @Input() searchFormGroup: FormGroup;
  @Input() showSearchClearButton: boolean;
  @Output() searchFormCleared = new EventEmitter();
}
