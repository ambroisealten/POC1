import { Component } from '@angular/core';
import { FirstPageComponent } from './first-page/first-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SwipeOnsennuie';
  initialPage = FirstPageComponent;
}
