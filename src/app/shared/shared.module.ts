import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionButtonsComponent } from './layout';
import { LoaderComponent } from './loader';

@NgModule({
  declarations: [
    ActionButtonsComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ActionButtonsComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
