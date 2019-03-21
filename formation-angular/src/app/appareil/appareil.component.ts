import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.services';
import { AuthService } from '../services/auth.services';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() id : number;
  @Input() lastUpdate : Date;
  @Input() isAuth : boolean;

  constructor(private appareilService : AppareilService,private authService : AuthService) { 
    this.isAuth = this.authService.isAuth;
  }

  ngOnInit() {
  }

  getColor(){
    switch(this.appareilStatus){
      case "Allumé":
        return "green";
        break;
      case "Éteint":
        return "red";
        break;
      default:
        return "orange";
        break;
    }
  }

  allumer(){
    this.appareilService.allumer(this.id);
  }

  eteindre(){
    this.appareilService.eteindre(this.id);
  }
}
