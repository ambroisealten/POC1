import { Component} from '@angular/core';
import { MenuService } from '../service/MenuService.service';
import { HomeTabComponent } from '../home-tab/home-tab.component';
import { Page2Component } from '../page2/page2.component';
import { Page3Component } from '../page3/page3.component';

@Component({
  selector: 'ons-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent{
  tab1 = HomeTabComponent;
  tab2 = Page2Component;
  tab3 = Page3Component;
  constructor(private menuService: MenuService) { }

  openMenu() {
    this.menuService.open();
  }
  
}
