import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupsFeedbackComponent } from './popups-feedback.component';

describe('PopupsFeedbackComponent', () => {
  let component: PopupsFeedbackComponent;
  let fixture: ComponentFixture<PopupsFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupsFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupsFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
