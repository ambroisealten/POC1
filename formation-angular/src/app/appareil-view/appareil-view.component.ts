import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.services';
import { AuthService } from '../services/auth.services';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  appareils : any[];
  isAuth = false;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 100
    );
  });

  constructor(private appareilService : AppareilService, private authService : AuthService) {
    this.isAuth = this.authService.isAuth;
   }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  eteindreTout(){
    if(confirm("Voulez-vous tout éteindre ?")){
      this.appareilService.eteindreTout();
    }
  }

  allumerTout(){
    if(confirm("Voulez-vous tout allumer ?")){
      this.appareilService.allumerTout();
    }
  }

}
