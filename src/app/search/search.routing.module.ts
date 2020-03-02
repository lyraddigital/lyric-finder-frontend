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
      },
      {
        path: 'start',
        component: SearchStartComponent,
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: 'start',
        pathMatch: 'full'
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class SearchRoutingModule { }
