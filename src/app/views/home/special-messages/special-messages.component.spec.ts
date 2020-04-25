import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialMessagesComponent } from './special-messages.component';

describe('SpecialMessagesComponent', () => {
  let component: SpecialMessagesComponent;
  let fixture: ComponentFixture<SpecialMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
