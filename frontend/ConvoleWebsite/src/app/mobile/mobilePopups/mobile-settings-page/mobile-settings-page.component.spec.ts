import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSettingsPageComponent } from './mobile-settings-page.component';

describe('MobileSettingsPageComponent', () => {
  let component: MobileSettingsPageComponent;
  let fixture: ComponentFixture<MobileSettingsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileSettingsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
