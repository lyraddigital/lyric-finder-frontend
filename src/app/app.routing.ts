import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SplashComponent } from 'src/app/splash';
import { SearchComponent } from 'src/app/search';

@NgModule({
  imports: [
    RouterModule.forRoot([
        {
            path: 'splash',
            component: SplashComponent
        },
        {
            path: 'search/:searchTerm',
            component: SearchComponent,
            loadChildren: () => import('src/app/search/search.module').then(m => m.SearchModule),
        },
        {
            path: '',
            redirectTo: '/search/',
            pathMatch: 'full'
        }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
