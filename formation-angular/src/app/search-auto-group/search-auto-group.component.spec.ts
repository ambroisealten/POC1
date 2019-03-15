import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAutoGroupComponent } from './search-auto-group.component';

describe('SearchAutoGroupComponent', () => {
  let component: SearchAutoGroupComponent;
  let fixture: ComponentFixture<SearchAutoGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAutoGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAutoGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
