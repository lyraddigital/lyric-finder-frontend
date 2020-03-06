import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared';
import { SearchRoutingModule } from './search.routing.module';
import { SearchContainerComponent } from './layout';
import { SearchStartComponent } from './search-start';
import {
  SearchResultListComponent,
  SearchResultItemComponent,
  SearchResultsContainerComponent
} from './search-results';

@NgModule({
  declarations: [
    SearchContainerComponent,
    SearchStartComponent,
    SearchResultListComponent,
    SearchResultItemComponent,
    SearchResultsContainerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SearchRoutingModule,
    SharedModule
  ]
})
export class SearchModule { }
