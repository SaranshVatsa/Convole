import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverCommunitiesCardDoubleComponent } from './discover-communities-card-double.component';

describe('DiscoverCommunitiesCardDoubleComponent', () => {
  let component: DiscoverCommunitiesCardDoubleComponent;
  let fixture: ComponentFixture<DiscoverCommunitiesCardDoubleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverCommunitiesCardDoubleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverCommunitiesCardDoubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
