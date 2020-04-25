import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlushFreezeComponent } from './slush-freeze.component';

describe('SlushFreezeComponent', () => {
  let component: SlushFreezeComponent;
  let fixture: ComponentFixture<SlushFreezeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlushFreezeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlushFreezeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
