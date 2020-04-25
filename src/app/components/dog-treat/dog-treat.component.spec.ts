import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogTreatComponent } from './dog-treat.component';

describe('DogTreatComponent', () => {
  let component: DogTreatComponent;
  let fixture: ComponentFixture<DogTreatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogTreatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogTreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
