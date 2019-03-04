import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverCommunitiesComponent } from './discover-communities.component';

describe('DiscoverCommunitiesComponent', () => {
  let component: DiscoverCommunitiesComponent;
  let fixture: ComponentFixture<DiscoverCommunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverCommunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverCommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
