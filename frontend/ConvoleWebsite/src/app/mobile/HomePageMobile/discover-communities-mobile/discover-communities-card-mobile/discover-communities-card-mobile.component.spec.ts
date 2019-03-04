import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverCommunitiesCardMobileComponent } from './discover-communities-card-mobile.component';

describe('DiscoverCommunitiesCardMobileComponent', () => {
  let component: DiscoverCommunitiesCardMobileComponent;
  let fixture: ComponentFixture<DiscoverCommunitiesCardMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverCommunitiesCardMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverCommunitiesCardMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
