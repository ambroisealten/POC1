import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui/directives/ons-navigator';
import { FirstPageComponent } from '../first-page/first-page.component';

@Component({
  selector: 'ons-page[second]',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent{

  constructor(private navigator: OnsNavigator) { }

  pop() {
    // Push SecontPageComponent to `ons-navigator
    this.navigator.element.popPage(FirstPageComponent);
  }
}
