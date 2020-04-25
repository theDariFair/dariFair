import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatesShakesComponent } from './floates-shakes.component';

describe('FloatesShakesComponent', () => {
  let component: FloatesShakesComponent;
  let fixture: ComponentFixture<FloatesShakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatesShakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatesShakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
