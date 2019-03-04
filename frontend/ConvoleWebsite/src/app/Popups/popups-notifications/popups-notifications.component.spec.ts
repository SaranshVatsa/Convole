import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupsNotificationsComponent } from './popups-notifications.component';

describe('PopupsNotificationsComponent', () => {
  let component: PopupsNotificationsComponent;
  let fixture: ComponentFixture<PopupsNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupsNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupsNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
