import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileFeedbackPageComponent } from './mobile-feedback-page.component';

describe('MobileFeedbackPageComponent', () => {
  let component: MobileFeedbackPageComponent;
  let fixture: ComponentFixture<MobileFeedbackPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileFeedbackPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileFeedbackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
