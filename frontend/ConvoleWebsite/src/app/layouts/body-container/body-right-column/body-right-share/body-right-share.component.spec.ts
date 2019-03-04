import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyRightShareComponent } from './body-right-share.component';

describe('BodyRightShareComponent', () => {
  let component: BodyRightShareComponent;
  let fixture: ComponentFixture<BodyRightShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyRightShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyRightShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
