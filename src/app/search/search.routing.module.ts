import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SearchResultsContainerComponent } from './search-results';
import { SearchStartComponent } from './search-start';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'results/:searchTerm',
        component: SearchResultsContainerComponent,
        outlet: 'search-output'
      },
      {
        path: 'start',
        component: SearchStartComponent,
        outlet: 'search-output',
        pathMatch: 'full'
      },
      {
        path: '',
        component: SearchStartComponent,
        outlet: 'search-output',
        pathMatch: 'full'
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class SearchRoutingModule { }
