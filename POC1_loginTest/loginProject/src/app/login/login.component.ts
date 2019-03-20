import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as sha512 from 'js-sha512';

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

    let postParams = {
      mail: this.userEmail,
      pswd: sha512.sha512(this.userPswd),
    }

    this.httpClient.post('http://localhost:8080/login', postParams).subscribe(data => {
      console.log(data);
      window.sessionStorage.setItem("bearerToken",JSON.parse(JSON.stringify(data))["token"]);
    }, error => {
      console.log(error);// Error getting the data
    });

    console.log("clicked " + this.userEmail + " " + this.userPswd + " " + this.authenticated);
  }

  ngOnInit() {
  }

}
