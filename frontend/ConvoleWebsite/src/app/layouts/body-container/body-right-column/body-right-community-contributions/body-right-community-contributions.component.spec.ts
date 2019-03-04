import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyRightCommunityContributionsComponent } from './body-right-community-contributions.component';

describe('BodyRightCommunityContributionsComponent', () => {
  let component: BodyRightCommunityContributionsComponent;
  let fixture: ComponentFixture<BodyRightCommunityContributionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyRightCommunityContributionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyRightCommunityContributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
