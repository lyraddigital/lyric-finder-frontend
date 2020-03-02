import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared';
import { SearchRoutingModule } from './search.routing.module';
import { SearchPageComponent } from './layouts/search-page.component';
import { SearchFormComponent } from './search-form';
import { SearchStartComponent } from './search-start';
import {
  SearchResultListComponent,
  SearchResultItemComponent,
  SearchResultsContainerComponent
} from './search-results';

@NgModule({
  declarations: [
    SearchPageComponent,
    SearchStartComponent,
    SearchResultListComponent,
    SearchResultItemComponent,
    SearchFormComponent,
    SearchResultsContainerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SearchRoutingModule,
    SharedModule,
  ],
  exports: [
    SearchPageComponent
  ]
})
export class SearchModule { }
