import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNotificationsPageComponent } from './mobile-notifications-page.component';

describe('MobileNotificationsPageComponent', () => {
  let component: MobileNotificationsPageComponent;
  let fixture: ComponentFixture<MobileNotificationsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileNotificationsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNotificationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
