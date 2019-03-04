import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNotificationUnitComponent } from './mobile-notification-unit.component';

describe('MobileNotificationUnitComponent', () => {
  let component: MobileNotificationUnitComponent;
  let fixture: ComponentFixture<MobileNotificationUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileNotificationUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNotificationUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
