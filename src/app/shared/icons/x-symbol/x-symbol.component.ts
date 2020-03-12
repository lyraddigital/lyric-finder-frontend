import { Component, Input } from '@angular/core';

@Component({
  selector: 'ldsc-x-symbol',
  templateUrl: './x-symbol.component.html',
  styleUrls: ['./x-symbol.component.scss']
})
export class XSymbolComponent {
    @Input() isWhite: boolean;
}