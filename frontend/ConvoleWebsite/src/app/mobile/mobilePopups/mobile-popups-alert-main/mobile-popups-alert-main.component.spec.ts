import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePopupsAlertMainComponent } from './mobile-popups-alert-main.component';

describe('MobilePopupsAlertMainComponent', () => {
  let component: MobilePopupsAlertMainComponent;
  let fixture: ComponentFixture<MobilePopupsAlertMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePopupsAlertMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePopupsAlertMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
