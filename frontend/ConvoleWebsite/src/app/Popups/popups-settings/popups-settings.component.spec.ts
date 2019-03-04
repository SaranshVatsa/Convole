import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupsSettingsComponent } from './popups-settings.component';

describe('PopupsSettingsComponent', () => {
  let component: PopupsSettingsComponent;
  let fixture: ComponentFixture<PopupsSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupsSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
