import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { SearchComponent } from 'src/app/songs/search/search.component';
import { SearchStartComponent } from 'src/app/songs/search/search-start/search-start.component';
import { SearchResultsComponent } from 'src/app/songs/search/search-results/search-results.component';
import { SearchResultItemComponent } from 'src/app/songs/search/search-results/search-result-item/search-result-item.component';
import { SearchFormComponent } from 'src/app/songs/search/search-form/search-form.component';

@NgModule({
  declarations: [
    SearchComponent,
    SearchStartComponent,
    SearchResultsComponent,
    SearchResultItemComponent,
    SearchFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
