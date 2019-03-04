import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverCommunitiesCardComponent } from './discover-communities-card.component';

describe('DiscoverCommunitiesCardComponent', () => {
  let component: DiscoverCommunitiesCardComponent;
  let fixture: ComponentFixture<DiscoverCommunitiesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverCommunitiesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverCommunitiesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
