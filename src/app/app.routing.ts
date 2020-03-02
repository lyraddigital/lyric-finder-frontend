import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SplashComponent } from 'src/app/splash';
import { SearchPageComponent } from 'src/app/search';

@NgModule({
  imports: [
    RouterModule.forRoot([
        {
            path: 'splash',
            component: SplashComponent
        },
        {
            path: 'search',
            component: SearchPageComponent,
            loadChildren: () => import('src/app/search/search.module').then(m => m.SearchModule),
        },
        {
            path: '',
            redirectTo: 'search',
            pathMatch: 'full'
        }
    ], { enableTracing: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
