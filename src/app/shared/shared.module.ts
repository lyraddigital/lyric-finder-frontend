import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ActionButtonsComponent, FooterComponent, SideBarComponent } from './layout';
import { LoaderComponent } from './loader';
import { HistoryNavigationButtonsComponent } from './history-navigation-buttons';

@NgModule({
  declarations: [
    ActionButtonsComponent,
    LoaderComponent,
    SideBarComponent,
    FooterComponent,
    HistoryNavigationButtonsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    LoaderComponent,
    SideBarComponent,
    FooterComponent,
    HistoryNavigationButtonsComponent
  ]
})
export class SharedModule { }
