import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscDrinksComponent } from './misc-drinks.component';

describe('MiscDrinksComponent', () => {
  let component: MiscDrinksComponent;
  let fixture: ComponentFixture<MiscDrinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscDrinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
