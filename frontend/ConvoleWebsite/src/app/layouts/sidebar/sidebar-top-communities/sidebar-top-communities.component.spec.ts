import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarTopCommunitiesComponent } from './sidebar-top-communities.component';

describe('SidebarTopCommunitiesComponent', () => {
  let component: SidebarTopCommunitiesComponent;
  let fixture: ComponentFixture<SidebarTopCommunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarTopCommunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarTopCommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
