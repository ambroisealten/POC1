import { Component} from '@angular/core';
import { MenuService } from '../service/MenuService.service';

@Component({
  selector: 'ons-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent{
  constructor(private menuService: MenuService) { }
  openMenu() {
    this.menuService.open();
  }
}
