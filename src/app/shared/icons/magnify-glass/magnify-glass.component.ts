import { Component, Input } from '@angular/core';

@Component({
  selector: 'ldsc-magnify-glass',
  templateUrl: './magnify-glass.component.html',
  styleUrls: ['./magnify-glass.component.scss']
})
export class MagnifyGlassComponent {
    @Input() disabled: boolean;
}