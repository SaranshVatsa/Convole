import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyRightAboutComponent } from './body-right-about.component';

describe('BodyRightAboutComponent', () => {
  let component: BodyRightAboutComponent;
  let fixture: ComponentFixture<BodyRightAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyRightAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyRightAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
