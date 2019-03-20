import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: string;
  headers: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.getUsers();
  }

  ngOnInit() {
  }

  getUsers() {
    let token = window.sessionStorage.getItem("bearerToken");
    
    if(token != "" && token != null && token != undefined)
      this.headers = new HttpHeaders({'Authorization': token });

    let options = { headers: this.headers };

    this.httpClient
      .get('http://localhost:8080/users', options)
      .subscribe(data => {
        console.log(JSON.stringify(data));
        this.users = JSON.stringify(data);
      }, error => {
        console.log(error);// Error getting the data
        this.users = "";
      });
  }



}
