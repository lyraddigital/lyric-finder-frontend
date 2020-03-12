import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ActionButtonsComponent, FooterComponent, SideBarComponent, TopBarComponent, PageLayoutComponent } from './layout';
import { LoaderComponent } from './loader';
import { SearchFormComponent } from './search-form';
import { HistoryNavigationButtonsComponent } from './history-navigation-buttons';
import { LeftArrowComponent, RightArrowComponent, XSymbolComponent, MagnifyGlassComponent } from './icons';

@NgModule({
  declarations: [
    ActionButtonsComponent,
    LoaderComponent,
    SideBarComponent,
    SearchFormComponent,
    TopBarComponent,
    FooterComponent,
    HistoryNavigationButtonsComponent,
    PageLayoutComponent,
    LeftArrowComponent,
    RightArrowComponent,
    XSymbolComponent,
    MagnifyGlassComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    PageLayoutComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
