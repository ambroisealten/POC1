import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bonjour';
  isAuth = false;

  deviceOne = 'Machine à laver';
  deviceTwo = 'Frigo';
  deviceThree = 'Ordinateur';

  on = 'on';
  off = 'off';

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onPowerOn() {
    console.log('cc');
  }
}
