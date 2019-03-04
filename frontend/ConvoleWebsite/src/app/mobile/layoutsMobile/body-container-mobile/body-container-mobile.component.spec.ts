import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContainerMobileComponent } from './body-container-mobile.component';

describe('BodyContainerMobileComponent', () => {
  let component: BodyContainerMobileComponent;
  let fixture: ComponentFixture<BodyContainerMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyContainerMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyContainerMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
