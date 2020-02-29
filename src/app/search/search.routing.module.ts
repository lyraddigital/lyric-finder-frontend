import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SearchResultsContainerComponent } from './search-results/search-results-container/search-results-container.component';

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
