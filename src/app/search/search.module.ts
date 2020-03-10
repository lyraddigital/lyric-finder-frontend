import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared';
import { SearchRoutingModule } from './search.routing.module';
import { SearchStartComponent } from './search-start';
import {
  SearchResultListComponent,
  SearchResultItemComponent,
  SearchResultsContainerComponent,
  SearchResultsErrorComponent
} from './search-results';

@NgModule({
  declarations: [
    SearchStartComponent,
    SearchResultListComponent,
    SearchResultItemComponent,
    SearchResultsContainerComponent,
    SearchResultsErrorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SearchRoutingModule,
    SharedModule
  ]
})
export class SearchModule { }
