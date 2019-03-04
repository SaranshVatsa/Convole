import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupsCommunitiesSelectionComponent } from './popups-communities-selection.component';

describe('PopupsCommunitiesSelectionComponent', () => {
  let component: PopupsCommunitiesSelectionComponent;
  let fixture: ComponentFixture<PopupsCommunitiesSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupsCommunitiesSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupsCommunitiesSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
