import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageAfterLoginComponent } from './home-page-after-login.component';

describe('HomePageAfterLoginComponent', () => {
  let component: HomePageAfterLoginComponent;
  let fixture: ComponentFixture<HomePageAfterLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageAfterLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageAfterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
