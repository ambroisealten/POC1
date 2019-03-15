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
    console.log("clicked " + this.userEmail + " " + this.userPswd);
    // TODO post data
    /*this.httpClient
      .get('http://localhost:8080/signup?mail=' + this.userEmail + '&pswd=' + this.userPswd
                                                + '&firstname=' + this.userFirstname + '&lastname=' + this.userLastname)
      .forEach(next =>
        console.log("CC"));*/
    console.log("clicked " + this.userEmail + " " + this.userPswd + " " + this.userFirstname + " " + this.userLastname);
  }

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

}
