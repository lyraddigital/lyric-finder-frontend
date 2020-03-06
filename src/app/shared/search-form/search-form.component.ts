import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ldsc-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  @Input() formGroup: FormGroup;
  @Input() showClearButton: boolean;
  @Output() searchCleared = new EventEmitter<any>();
}
