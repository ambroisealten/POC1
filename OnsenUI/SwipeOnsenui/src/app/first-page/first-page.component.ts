import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { SecondPageComponent } from '../second-page/second-page.component';

@Component({
  selector: 'ons-page[first]',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent {

  constructor(private navigator: OnsNavigator) { }

  push() {
    // Push SecontPageComponent to `ons-navigator
    this.navigator.element.pushPage(SecondPageComponent);
  }
}
