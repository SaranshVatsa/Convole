import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorHomeComponent } from './navbar-action-mobile-home.component';

describe('NavigatorHomeComponent', () => {
  let component: NavigatorHomeComponent;
  let fixture: ComponentFixture<NavigatorHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigatorHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
