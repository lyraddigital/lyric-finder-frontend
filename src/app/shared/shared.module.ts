import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ActionButtonsComponent, FooterComponent, SideBarComponent, TopBarComponent } from './layout';
import { LoaderComponent } from './loader';
import { SearchFormComponent } from './search-form';
import { HistoryNavigationButtonsComponent } from './history-navigation-buttons/history-navigation-buttons.component';

@NgModule({
  declarations: [
    ActionButtonsComponent,
    LoaderComponent,
    SearchFormComponent,
    TopBarComponent,
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
    SearchFormComponent,
    TopBarComponent,
    SideBarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
