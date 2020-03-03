import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ldsc-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  @Input() initialFormValue: string;
  @Output() searchTermUpdated = new EventEmitter<string>();

  triggerTermUpdated(searchTerm: string) {
    this.searchTermUpdated.emit(searchTerm);
  }
}
