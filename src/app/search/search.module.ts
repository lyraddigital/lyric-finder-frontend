import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared';
import { SearchRoutingModule } from './search.routing.module';
import { SearchComponent } from './search.component';
import { SearchFormComponent } from './search-form';
import {
  SearchStartComponent,
  SearchResultListComponent,
  SearchResultItemComponent,
  SearchResultsContainerComponent
} from './search-results';

@NgModule({
  declarations: [
    SearchComponent,
    SearchStartComponent,
    SearchResultListComponent,
    SearchResultItemComponent,
    SearchFormComponent,
    SearchResultsContainerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    SearchRoutingModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
