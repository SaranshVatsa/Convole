import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBodyTopHomeComponent } from './mobile-body-top-home.component';

describe('MobileBodyTopHomeComponent', () => {
  let component: MobileBodyTopHomeComponent;
  let fixture: ComponentFixture<MobileBodyTopHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileBodyTopHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileBodyTopHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
