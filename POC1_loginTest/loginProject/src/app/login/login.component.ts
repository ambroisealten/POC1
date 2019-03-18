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

    let postParams = {
      mail: this.userEmail,
      pswd: this.userPswd,
    }

    this.httpClient.post('http://localhost:8080/login', postParams).subscribe(data => {
      console.log(data);
      window.sessionStorage.setItem("bearerToken", data.toString());
    }, error => {
      console.log(error);// Error getting the data
    });

    console.log("clicked " + this.userEmail + " " + this.userPswd + " " + this.authenticated);
  }

  ngOnInit() {
  }

}
