import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { OnsenModule } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent
  ],
  imports: [
    BrowserModule,
    OnsenModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
  ],
  entryComponents: [
    FirstPageComponent,
    SecondPageComponent
  ],
})
export class AppModule { }
