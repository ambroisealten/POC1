import { Component, ViewChild } from '@angular/core';
import { SidePageComponent } from './side-page/side-page.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { MenuService } from './service/MenuService.service';
import { HomeTabComponent } from './home-tab/home-tab.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidePage = SidePageComponent;
  contentPage = ContentPageComponent;
  tab1 = HomeTabComponent
  tab2 = Page2Component
  tab3 = Page3Component
  @ViewChild('splitter') splitter;
  constructor(private menuService: MenuService) {
    this.menuService.menu$.subscribe(() => this.splitter.nativeElement.side.open());
  }
}
