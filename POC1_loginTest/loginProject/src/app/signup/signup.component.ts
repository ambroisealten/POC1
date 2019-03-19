import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userEmail: string;
  userPswd: string;
  userFirstname: string;
  userLastname: string;

  onSignup() {

    let postParams = {
      mail: this.userEmail,
      pswd: this.userPswd,
      name: this.userLastname,
      forname: this.userFirstname
    }
    this.httpClient.post('http://localhost:8080/signup', postParams)
      .subscribe(data => {
        console.log(data);
        window.sessionStorage.setItem("bearerToken", data.toString());
      }, error => {
        console.log(error);// Error getting the data
      });
  }

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

}
