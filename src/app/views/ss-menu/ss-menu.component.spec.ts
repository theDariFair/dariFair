import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsMenuComponent } from './ss-menu.component';

describe('SsMenuComponent', () => {
  let component: SsMenuComponent;
  let fixture: ComponentFixture<SsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
