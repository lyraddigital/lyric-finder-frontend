import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'search',
        loadChildren: () => import('src/app/search/search.module').then(m => m.SearchModule)
      },
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'search'
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
