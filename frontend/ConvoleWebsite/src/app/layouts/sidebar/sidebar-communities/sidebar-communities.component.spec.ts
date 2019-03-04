import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCommunitiesComponent } from './sidebar-communities.component';

describe('SidebarCommunitiesComponent', () => {
  let component: SidebarCommunitiesComponent;
  let fixture: ComponentFixture<SidebarCommunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarCommunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarCommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
