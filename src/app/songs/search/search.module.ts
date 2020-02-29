import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { SearchRoutingModule } from './search.routing.module';
import { SearchComponent } from 'src/app/songs/search/search.component';
import { SearchStartComponent } from 'src/app/songs/search/search-start/search-start.component';
import { SearchResultListComponent } from 'src/app/songs/search/search-results/search-result-list/search-result-list.component';
import { SearchResultItemComponent } from 'src/app/songs/search/search-results/search-result-item/search-result-item.component';
import { SearchFormComponent } from 'src/app/songs/search/search-form/search-form.component';
import { SearchResultsContainerComponent } from './search-results/search-results-container/search-results-container.component';

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
