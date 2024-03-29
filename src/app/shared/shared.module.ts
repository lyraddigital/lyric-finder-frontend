import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IconsModule } from './icons';
import { ActionButtonsComponent, FooterComponent, SideBarComponent, TopBarComponent, PageLayoutComponent } from './layout';
import { LoaderComponent } from './loader';
import { SearchFormComponent } from './search-form';
import { HistoryNavigationButtonsComponent } from './history-navigation-buttons';

@NgModule({
  declarations: [
    ActionButtonsComponent,
    LoaderComponent,
    SideBarComponent,
    SearchFormComponent,
    TopBarComponent,
    FooterComponent,
    HistoryNavigationButtonsComponent,
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconsModule
  ],
  exports: [
    PageLayoutComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
