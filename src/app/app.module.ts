import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppRatemeComponentComponent } from './app.rateme.component/app.rateme.component.component';
import { AppThankuComponentComponent } from './app.thanku.component/app.thanku.component.component';

@NgModule({
  declarations: [
    AppComponent,
    AppRatemeComponentComponent,
    AppThankuComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
