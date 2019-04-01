import {Component, OnInit, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-auto',
  templateUrl: './search-auto.component.html',
  styleUrls: ['./search-auto.component.scss'],
  providers : [SearchService]
})
export class SearchAutoComponent implements OnInit {
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  options: string[];
  result : any;
  @Input() tagWords : string[];

  constructor(private SearchService : SearchService){
    this.SearchService.setDataType('miscellaneous');
    this.SearchService.getOptions((options) =>{
      this.options = options;
    });
  }

  ngOnInit(){
    this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this.SearchService.filter(value))
      );
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
    * Action à effectuer lorsque l'utilisateur valide le formulaire (appuie sur la touche 'Entrée' ou confirme son choix)
    */
    if(this.myControl.value != null && this.myControl.value.length > 0) {
      this.SearchService.addInDB(this.myControl.value);
      this.tagWords = this.SearchService.addOptionTaken(this.myControl.value);
    }
    this.myControl.patchValue('');
  }

  deleteTagWord(event){
    this.tagWords = this.SearchService.deleteOptionTaken(event.target.nextSibling.textContent);
  }
}
