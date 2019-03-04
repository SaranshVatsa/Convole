import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCommunityContributionsScoreUnitComponent } from './mobile-contributions-score-unit.component';

describe('MobileCommunityContributionsScoreUnitComponent', () => {
  let component: MobileCommunityContributionsScoreUnitComponent;
  let fixture: ComponentFixture<MobileCommunityContributionsScoreUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileCommunityContributionsScoreUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileCommunityContributionsScoreUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
