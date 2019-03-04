import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverCommunitiesMobileComponent } from './discover-communities-mobile.component';

describe('DiscoverCommunitiesMobileComponent', () => {
  let component: DiscoverCommunitiesMobileComponent;
  let fixture: ComponentFixture<DiscoverCommunitiesMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverCommunitiesMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverCommunitiesMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
