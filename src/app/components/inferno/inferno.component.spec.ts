import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfernoComponent } from './inferno.component';

describe('InfernoComponent', () => {
  let component: InfernoComponent;
  let fixture: ComponentFixture<InfernoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfernoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
