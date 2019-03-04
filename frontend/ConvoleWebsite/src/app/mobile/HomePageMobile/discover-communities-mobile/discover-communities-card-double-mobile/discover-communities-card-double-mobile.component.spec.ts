import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverCommunitiesCardDoubleMobileComponent } from './discover-communities-card-double-mobile.component';

describe('DiscoverCommunitiesCardDoubleMobileComponent', () => {
  let component: DiscoverCommunitiesCardDoubleMobileComponent;
  let fixture: ComponentFixture<DiscoverCommunitiesCardDoubleMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverCommunitiesCardDoubleMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverCommunitiesCardDoubleMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
