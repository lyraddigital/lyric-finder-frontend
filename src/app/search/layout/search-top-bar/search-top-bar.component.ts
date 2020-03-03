import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ldsc-search-top-bar',
  templateUrl: './search-top-bar.component.html',
  styleUrls: ['./search-top-bar.component.scss']
})
export class SearchTopBarComponent {
  @Input() initialFormValue: string;
  @Output() searchTermUpdated = new EventEmitter<string>();

  triggerTermUpdated(searchTerm: string) {
    this.searchTermUpdated.emit(searchTerm);
  }
}
