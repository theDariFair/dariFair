import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialTreatsComponent } from './special-treats.component';

describe('SpecialTreatsComponent', () => {
  let component: SpecialTreatsComponent;
  let fixture: ComponentFixture<SpecialTreatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialTreatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialTreatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
