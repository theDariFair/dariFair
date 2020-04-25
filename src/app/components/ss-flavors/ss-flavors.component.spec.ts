import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsFlavorsComponent } from './ss-flavors.component';

describe('SsFlavorsComponent', () => {
  let component: SsFlavorsComponent;
  let fixture: ComponentFixture<SsFlavorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsFlavorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsFlavorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
