import {Component, OnInit, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-users-auto',
  templateUrl: './search-users-auto.component.html',
  styleUrls: ['./search-users-auto.component.scss']
})
export class SearchUsersAutoComponent implements OnInit {
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  options: string[];
  result : any;

  constructor(private SearchService : SearchService){
    this.SearchService.setDataType('users');
    this.SearchService.getOptions((options) =>{
      this.options = options;
    });
  }

  ngOnInit(){
    this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this.SearchService.filter(value))
      );
      this.SearchService.setDataType('users');
  }

  ngOnDestroy(){
    /*
    * Sauvegarder uniquement les options prises au final dans la BDD (pour pas prendre en compte les erreurs possibles)
    * Like this.SearchService.saveOptionsTaken()
    */
    console.log(this.SearchService.getOptionsTaken());
  }

  onSubmitForm(){
    /*
    * Bout de code valide pour les mots-clés
    *
    if(this.myControl.value != null && this.myControl.value.length > 0) {
      this.SearchService.addInDB(this.myControl.value);
      this.tagWords = this.SearchService.addOptionTaken(this.myControl.value);
    }
    */
   this.SearchService.setDataType('user');
    if(this.myControl.value != null && this.myControl.value.length > 0) {
      this.SearchService.getUser(this.myControl.value,(result) => {
        this.result = result;
      });
    }
    this.myControl.patchValue('');
  }

}
