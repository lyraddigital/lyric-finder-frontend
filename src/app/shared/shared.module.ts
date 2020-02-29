import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionButtonsComponent } from './layout';

@NgModule({
  declarations: [
    ActionButtonsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ActionButtonsComponent
  ]
})
export class SharedModule { }
