import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupsAlertSmallComponent } from './popups-alert-small.component';

describe('PopupsAlertSmallComponent', () => {
  let component: PopupsAlertSmallComponent;
  let fixture: ComponentFixture<PopupsAlertSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupsAlertSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupsAlertSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
