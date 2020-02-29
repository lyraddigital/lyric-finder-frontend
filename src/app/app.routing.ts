import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SplashComponent } from './splash/splash.component';
import { SearchComponent } from './songs/search/search.component';

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
            loadChildren: () => import('src/app/songs/search/search.module').then(m => m.SearchModule),
        },
        {
            path: '',
            redirectTo: '/search/',
            pathMatch: 'prefix'
        }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
