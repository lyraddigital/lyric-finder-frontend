import { Component, Input } from '@angular/core';

@Component({
  selector: 'ldsc-right-arrow',
  templateUrl: './right-arrow.component.html',
  styleUrls: ['../arrow-colors.scss']
})
export class RightArrowComponent {
    @Input() disabled: boolean;
}