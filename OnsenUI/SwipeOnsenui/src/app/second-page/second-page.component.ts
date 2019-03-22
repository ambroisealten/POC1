import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menuService.service';

@Component({
  selector: 'ons-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent{

  constructor(private menuService: MenuService) { }
  openMenu() {
    this.menuService.open();
  }
}
