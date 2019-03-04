import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageBeforeLoginComponent } from './home-page-before-login.component';

describe('HomePageBeforeLoginComponent', () => {
  let component: HomePageBeforeLoginComponent;
  let fixture: ComponentFixture<HomePageBeforeLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageBeforeLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageBeforeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
