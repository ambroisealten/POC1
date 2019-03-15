import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleappareilComponent } from './singleappareil.component';

describe('SingleappareilComponent', () => {
  let component: SingleappareilComponent;
  let fixture: ComponentFixture<SingleappareilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleappareilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleappareilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
