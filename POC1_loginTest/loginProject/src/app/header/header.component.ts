import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthGuard } from '../services/auth-guard.service';

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
  links : SousLink[];

  constructor(title : string,links : SousLink[]){
    this.title = title;
    this.links = links;
  }
}

export class SousLink{
  title : string;
  url : string;

  constructor(title : string,url:string){
    this.title = title;
    this.url = url;
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
    new Module("Mission",[new SousMenu("Missions",[new SousLink("Chercher","search"),new SousLink("A définir","#"),new SousLink("A définir","#")]),new SousMenu("Projets",[new SousLink("Chercher","search"),new SousLink("A définir","#"),new SousLink("A définir","#")]),new SousMenu("Administration",[new SousLink("Chercher","searchUsers"),new SousLink("Users","users"),new SousLink("A définir","#")])]), 
    new Module("Compétences",[new SousMenu("Consultants",[new SousLink("Chercher","search"),new SousLink("A définir","#"),new SousLink("A définir","#")]),new SousMenu("Autre chose",[new SousLink("Chercher","search"),new SousLink("A définir","#"),new SousLink("A définir","#")]),new SousMenu("Administration",[new SousLink("Chercher","searchUsers"),new SousLink("Users","users"),new SousLink("A définir","#")])]),
    new Module("Forum",[new SousMenu("Candidats",[new SousLink("Chercher","search"),new SousLink("A définir","#"),new SousLink("A définir","#")]),new SousMenu("Autre chose",[new SousLink("Chercher","search"),new SousLink("A définir","#"),new SousLink("A définir","#")]),new SousMenu("Administration",[new SousLink("Chercher","searchUsers"),new SousLink("Users","users"),new SousLink("A définir","#")])])
    ];

  constructor(private titleService : Title,private authGuard : AuthGuard) { 
    this.currentModule = this.defaultModule;
    this.titleService.setTitle("Ambroise - "+this.currentModule);
  }

  ngOnInit() {
  }

  setCurrentModule(event){
    this.currentModule = (event.target.textContent != this.currentModule) ? event.target.textContent : this.currentModule;
    this.titleService.setTitle("Ambroise - "+this.currentModule);
  }

  accountClick(){
    if(this.authGuard.hasAuth()){
      this.deconnectUser();
    }
    else{
      this.authGuard.redirectToLogin();
    }
  }

  deconnectUser(){
    if(confirm("Voulez-vous vous déconnecter ?")){
      this.authGuard.disconnect();
    }
  }

}
