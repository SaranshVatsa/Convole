import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCommunitySelectionComponent } from './mobile-community-selection.component';

describe('MobileCommunitySelectionComponent', () => {
  let component: MobileCommunitySelectionComponent;
  let fixture: ComponentFixture<MobileCommunitySelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileCommunitySelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileCommunitySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
