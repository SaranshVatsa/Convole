import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTopHomeComponent } from './body-top-home.component';

describe('BodyTopHomeComponent', () => {
  let component: BodyTopHomeComponent;
  let fixture: ComponentFixture<BodyTopHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyTopHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyTopHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
