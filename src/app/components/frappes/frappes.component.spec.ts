import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrappesComponent } from './frappes.component';

describe('FrappesComponent', () => {
  let component: FrappesComponent;
  let fixture: ComponentFixture<FrappesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrappesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrappesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
