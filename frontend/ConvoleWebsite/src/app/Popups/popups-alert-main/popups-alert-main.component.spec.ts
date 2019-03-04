import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupsAlertMainComponent } from './popups-alert-main.component';

describe('PopupsAlertMainComponent', () => {
  let component: PopupsAlertMainComponent;
  let fixture: ComponentFixture<PopupsAlertMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupsAlertMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupsAlertMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
