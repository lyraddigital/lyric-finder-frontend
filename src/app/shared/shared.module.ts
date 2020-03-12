import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ActionButtonsComponent, FooterComponent, SideBarComponent, TopBarComponent, PageLayoutComponent } from './layout';
import { LoaderComponent } from './loader';
import { SearchFormComponent } from './search-form';
import { HistoryNavigationButtonsComponent } from './history-navigation-buttons';
import { LeftArrowComponent } from './icons/left-arrow/left-arrow.component';
import { RightArrowComponent } from './icons/right-arrow/right-arrow.component';
import { XSymbolComponent } from './icons/x-symbol/x-symbol.component';
import { MagnifyGlassComponent } from './icons/magnify-glass/magnify-glass.component';


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
