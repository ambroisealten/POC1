import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { OnsenModule } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ContentPageComponent } from './content-page/content-page.component';
import { SidePageComponent } from './side-page/side-page.component';
import { MenuService } from './service/MenuService.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HomeTabComponent } from './home-tab/home-tab.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentPageComponent,
    SidePageComponent,
    HomeTabComponent,
    Page2Component,
    Page3Component
  ],
  imports: [
    BrowserModule,
    OnsenModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [SidePageComponent, ContentPageComponent, HomeTabComponent, Page2Component, Page3Component],
})
export class AppModule { }

//platformBrowserDynamic().bootstrapModule(AppModule);
