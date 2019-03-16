import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { DemoMaterialModule } from '../material-module';
import { Routes, RouterModule } from '@angular/router';
import { SearchAutoComponent } from './search-auto/search-auto.component';
import { SearchAutoGroupComponent } from './search-auto-group/search-auto-group.component'
import { SearchService } from './services/search.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    SearchAutoComponent,
    SearchAutoGroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    DemoMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [ 
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
