import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as sha512 from 'js-sha512';
import { AuthGuard } from '../services/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userEmail: string;
  userPswd: string;

  constructor(private httpClient: HttpClient,private authGuard : AuthGuard) { }

  onConnect() {

    let postParams = {
      mail: this.userEmail,
      pswd: sha512.sha512(this.userPswd),
    }

    this.httpClient.post('http://localhost:8080/login', postParams).subscribe(data => {
      window.sessionStorage.setItem("bearerToken",JSON.parse(JSON.stringify(data))["token"]);
      this.authGuard.makeSignIn();

    }, error => {
      console.log(error);// Error getting the data
    });
  }

  ngOnInit() {
  }

}
