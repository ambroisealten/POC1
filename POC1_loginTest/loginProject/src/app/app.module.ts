import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DemoMaterialModule } from '../material-module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { SearchAutoComponent } from './search-auto/search-auto.component';
import { SearchService } from './services/search.service';
import { MatNativeDateModule } from '@angular/material';
import { SearchAutoGroupComponent } from './search-auto-group/search-auto-group.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'users', canActivate:[AuthGuard], component: UsersListComponent },
  { path: 'search', canActivate:[AuthGuard], component : SearchAutoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UsersListComponent,
    HeaderComponent,
    SearchAutoComponent,
    SearchAutoGroupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
