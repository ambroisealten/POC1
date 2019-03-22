import { Component } from '@angular/core';
import { MenuService } from '../service/MenuService.service';

@Component({
  selector: 'ons-page',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.scss']
})
export class HomeTabComponent{
  constructor(private menuService: MenuService) { }

  openMenu(){
    this.menuService.open();
  }

}
