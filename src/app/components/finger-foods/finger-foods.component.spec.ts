import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FingerFoodsComponent } from './finger-foods.component';

describe('FingerFoodsComponent', () => {
  let component: FingerFoodsComponent;
  let fixture: ComponentFixture<FingerFoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FingerFoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FingerFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
