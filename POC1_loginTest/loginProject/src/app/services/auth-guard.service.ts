import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService : AuthService, private router : Router){

    }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    debugger;
    if(this.hasAuth()){
        return true;
    }
    else{
        this.redirectToLogin();
    }
  }

  makeSignIn(){
      this.authService.signIn();
      this.router.navigate(['/users']);
  }

  hasAuth(){
      return (window.sessionStorage.getItem('isAuth') === 'true');
  }

  redirectToLogin(){
    this.router.navigate(['/login']);
  }

  disconnect(){
      this.authService.signOut();
      this.router.navigate(['/login']);
  }
}