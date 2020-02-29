import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared';
import { SearchRoutingModule } from './search.routing.module';
import { SearchPageComponent } from './search-page.component';
import { SearchFormComponent } from './search-form';
import {
  SearchResultInfoComponent,
  SearchResultListComponent,
  SearchResultItemComponent,
  SearchResultsContainerComponent
} from './search-results';

@NgModule({
  declarations: [
    SearchPageComponent,
    SearchResultInfoComponent,
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
    SearchPageComponent
  ]
})
export class SearchModule { }
