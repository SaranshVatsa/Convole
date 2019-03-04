import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSidebarTopCommunitiesComponent } from './mobile-sidebar-top-communities.component';

describe('MobileSidebarTopCommunitiesComponent', () => {
  let component: MobileSidebarTopCommunitiesComponent;
  let fixture: ComponentFixture<MobileSidebarTopCommunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileSidebarTopCommunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSidebarTopCommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
