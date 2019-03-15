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
    names: ['Alsace'].sort()
  },{
    letter : 'C',
    names : ['Champagne','Corse',"Charleville-Mézières","Cauet"].sort()
  }];

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