import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupsNotificationsUnitComponent } from './popups-notifications-unit.component';

describe('PopupsNotificationsUnitComponent', () => {
  let component: PopupsNotificationsUnitComponent;
  let fixture: ComponentFixture<PopupsNotificationsUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupsNotificationsUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupsNotificationsUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
