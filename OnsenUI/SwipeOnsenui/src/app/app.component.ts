import { Component, ViewChild } from '@angular/core';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { MenuService } from './services/menuService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SwipeOnsennuie';
  menuPage = FirstPageComponent;
  contentPage = SecondPageComponent;
  @ViewChild('splitter') splitter;
  constructor(private menuService: MenuService) {
    this.menuService.menu$.subscribe(() => this.splitter.nativeElement.side.open());
  }
}
