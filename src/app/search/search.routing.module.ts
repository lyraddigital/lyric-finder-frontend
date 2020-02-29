import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SearchResultsContainerComponent } from './search-results';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: SearchResultsContainerComponent,
        outlet: 'search-results'
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class SearchRoutingModule { }
