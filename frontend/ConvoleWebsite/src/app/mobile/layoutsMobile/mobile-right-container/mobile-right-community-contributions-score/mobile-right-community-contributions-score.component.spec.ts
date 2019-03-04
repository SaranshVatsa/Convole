import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileRightCommunityContributionsScoreComponent } from './mobile-right-community-contributions-score.component';

describe('MobileRightCommunityContributionsScoreComponent', () => {
  let component: MobileRightCommunityContributionsScoreComponent;
  let fixture: ComponentFixture<MobileRightCommunityContributionsScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileRightCommunityContributionsScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileRightCommunityContributionsScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
