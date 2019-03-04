import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageBeforeLoginTopComponent } from './home-page-before-login-top.component';

describe('HomePageBeforeLoginTopComponent', () => {
  let component: HomePageBeforeLoginTopComponent;
  let fixture: ComponentFixture<HomePageBeforeLoginTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageBeforeLoginTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageBeforeLoginTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
