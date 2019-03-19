import { Component, OnInit, Input } from '@angular/core';

export class Module{
  name : string;
  sousMenu : SousMenu[];

  constructor(name : string,sousMenu : SousMenu[]){
    this.name = name;
    this.sousMenu = sousMenu;
  }
}

export class SousMenu{
  title : string;
  links : string[];

  constructor(title : string,links : string[]){
    this.title = title;
    this.links = links;
  }
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  allModules : string[] = ["Mission","Compétences","Forum"];
  defaultModule : string = "Mission";
  currentModule : string;
  menusTest : string[] = ["Test","Allo"];
  sousMenus = [
    new Module("Mission",[new SousMenu("Missions",["Quelque chose","Pareil","Idem"]),new SousMenu("Projets",["Quelque chose","Pareil","Idem"]),new SousMenu("Administration",["Quelque chose","Pareil","Idem"])]), 
    new Module("Compétences",[new SousMenu("Consultants",["Quelque chose","Pareil","Idem"]),new SousMenu("Autre chose",["Quelque chose","Pareil","Idem"]),new SousMenu("Administration",["Quelque chose","Pareil","Idem"])]),
    new Module("Forum",[new SousMenu("Candidats",["Quelque chose","Pareil","Idem"]),new SousMenu("Autre chose",["Quelque chose","Pareil","Idem"]),new SousMenu("Administration",["Quelque chose","Pareil","Idem"])])
    ];

  constructor() { 
    this.currentModule = this.defaultModule;
  }

  ngOnInit() {
  }

  setCurrentModule(event){
    this.currentModule = (event.target.textContent != this.currentModule) ? event.target.textContent : this.currentModule;
  }

}
