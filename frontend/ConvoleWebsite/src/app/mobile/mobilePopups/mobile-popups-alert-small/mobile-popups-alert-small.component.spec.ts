import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePopupsAlertSmallComponent } from './mobile-popups-alert-small.component';

describe('MobilePopupsAlertSmallComponent', () => {
  let component: MobilePopupsAlertSmallComponent;
  let fixture: ComponentFixture<MobilePopupsAlertSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePopupsAlertSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePopupsAlertSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
