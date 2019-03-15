import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userEmail: string;
  userPswd: string;

  authenticated: boolean = false;

  constructor(private httpClient: HttpClient) { }

  onConnect() {
    console.log("clicked " + this.userEmail + " " + this.userPswd);
    /*this.httpClient
      .get('http://localhost:8080/login?mail=' + this.userEmail + '&pswd=' + this.userPswd)
      .forEach(next =>
        this.authenticated = (next as JSON)["auth"]);*/
  }

  ngOnInit() {
  }

}
