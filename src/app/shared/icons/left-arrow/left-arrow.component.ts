import { Component, Input } from '@angular/core';

@Component({
  selector: 'ldsc-left-arrow',
  templateUrl: './left-arrow.component.html',
  styleUrls: ['../arrow-colors.scss']
})
export class LeftArrowComponent {
    @Input() disabled: boolean;
}