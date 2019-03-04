import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBeforeLoginMobileComponent } from './home-before-login-mobile.component';

describe('HomeBeforeLoginMobileComponent', () => {
  let component: HomeBeforeLoginMobileComponent;
  let fixture: ComponentFixture<HomeBeforeLoginMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBeforeLoginMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBeforeLoginMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
