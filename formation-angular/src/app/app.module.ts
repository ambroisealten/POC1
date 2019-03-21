import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.services';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.services';
import { SingleAppareilComponent } from './singleappareil/singleappareil.component';
import { SearchAutoComponent } from './search-auto/search-auto.component';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { SearchService } from './services/search.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import { SearchAutoGroupComponent } from './search-auto-group/search-auto-group.component';

const appRoutes: Routes = [
  { path: 'appareils', component : AppareilViewComponent },
  { path: 'appareils/:id', component : SingleAppareilComponent},
  { path: 'auth', component : AuthComponent},
  { path: '', component : AppareilViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    SearchAutoComponent,
    SearchAutoGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [
    AppareilService,
    AuthService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
