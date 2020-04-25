import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazzlesComponent } from './razzles.component';

describe('RazzlesComponent', () => {
  let component: RazzlesComponent;
  let fixture: ComponentFixture<RazzlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazzlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazzlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
