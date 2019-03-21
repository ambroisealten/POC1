import {Component, OnInit} from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { SearchService } from '../services/search.service';

export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};


@Component({
  selector: 'app-search-auto-group',
  templateUrl: './search-auto-group.component.html',
  styleUrls: ['./search-auto-group.component.scss'],
  providers : [SearchService]
})
export class SearchAutoGroupComponent implements OnInit {
  stateForm: FormGroup = this.fb.group({
    stateGroup: '',
  });

  stateGroups: StateGroup[] = [{
    letter: 'A',
    names: ['Analyste financier','Analyste','Assureur','Assistant directeur technique','Attaché de presse'].sort()
  },
  {
    letter : 'C',
    names : ['Chargé de presse','Chargé de communication','Community Manager','CM'].sort()
  },{
    letter : 'D',
    names : ['Développeur','DevOps','Directeur technique','DTO',"Directeur d'agence"].sort()
  },{
    letter: 'E',
    names : ['Expert automobile','Expert comptable','Enseignant'].sort()
  },{
    letter : 'I',
    names : ['Ingénieur autmobile','Ingénieur aéro-nautique','Ingénieur ferroviaire','Ingénieur informaticien'].sort()
  },
  {
    letter : 'M',
    names : ['Manager','Manager RH'].sort()
  },
  {
    letter : 'R',
    names : ['Référent technique']
  },{
    letter : 'S',
    names : ['Stagiaire']
  }
];

  stateGroupOptions: Observable<StateGroup[]>;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value.length === 0) return [];
    let tempGroup = this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0).sort();
    tempGroup = (tempGroup.length === 0) ? [] : tempGroup;
    return tempGroup;
  }
}