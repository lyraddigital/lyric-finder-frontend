import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { SharedModule } from './shared';
import { CoreModule } from 'src/app/core';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    CoreModule.configureApiUrl(environment.deezerRapidApiDomainName, environment.deezerRapidApiKey),
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
