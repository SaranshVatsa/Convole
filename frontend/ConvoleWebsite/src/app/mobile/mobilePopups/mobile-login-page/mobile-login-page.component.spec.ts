import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileLoginPageComponent } from './mobile-login-page.component';

describe('MobileLoginPageComponent', () => {
  let component: MobileLoginPageComponent;
  let fixture: ComponentFixture<MobileLoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileLoginPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
