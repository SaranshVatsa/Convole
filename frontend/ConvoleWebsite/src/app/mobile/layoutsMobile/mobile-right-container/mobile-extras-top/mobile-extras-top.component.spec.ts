import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileExtrasTopComponent } from './mobile-extras-top.component';

describe('MobileExtrasTopComponent', () => {
  let component: MobileExtrasTopComponent;
  let fixture: ComponentFixture<MobileExtrasTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileExtrasTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileExtrasTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
