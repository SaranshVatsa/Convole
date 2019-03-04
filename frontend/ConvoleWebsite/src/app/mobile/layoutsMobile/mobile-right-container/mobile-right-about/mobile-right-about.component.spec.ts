import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileRightAboutComponent } from './mobile-right-about.component';

describe('MobileRightAboutComponent', () => {
  let component: MobileRightAboutComponent;
  let fixture: ComponentFixture<MobileRightAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileRightAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileRightAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
