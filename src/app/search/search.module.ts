import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { SearchRoutingModule } from './search.routing.module';
import { SearchComponent } from 'src/app/search/search.component';
import { SearchStartComponent } from 'src/app/search/search-start/search-start.component';
import { SearchResultListComponent } from 'src/app/search/search-results/search-result-list/search-result-list.component';
import { SearchResultItemComponent } from 'src/app/search/search-results/search-result-item/search-result-item.component';
import { SearchFormComponent } from 'src/app/search/search-form/search-form.component';
import { SearchResultsContainerComponent } from 'src/app/search/search-results/search-results-container/search-results-container.component';

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
