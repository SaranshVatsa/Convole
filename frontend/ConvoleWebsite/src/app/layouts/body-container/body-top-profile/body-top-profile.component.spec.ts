import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTopProfileComponent } from './body-top-profile.component';

describe('BodyTopProfileComponent', () => {
  let component: BodyTopProfileComponent;
  let fixture: ComponentFixture<BodyTopProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyTopProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyTopProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
