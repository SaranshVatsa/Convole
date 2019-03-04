import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupsLoginComponent } from './popups-login.component';

describe('PopupsLoginComponent', () => {
  let component: PopupsLoginComponent;
  let fixture: ComponentFixture<PopupsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
