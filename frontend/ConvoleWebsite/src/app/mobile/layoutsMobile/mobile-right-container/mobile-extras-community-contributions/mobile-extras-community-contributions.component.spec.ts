import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileExtrasCommunityContributionsComponent } from './mobile-extras-community-contributions.component';

describe('MobileExtrasCommunityContributionsComponent', () => {
  let component: MobileExtrasCommunityContributionsComponent;
  let fixture: ComponentFixture<MobileExtrasCommunityContributionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileExtrasCommunityContributionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileExtrasCommunityContributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
