import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFollowingComponent } from './sidebar-following.component';

describe('SidebarFollowingComponent', () => {
  let component: SidebarFollowingComponent;
  let fixture: ComponentFixture<SidebarFollowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarFollowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarFollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
