import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarContributionsComponent } from './sidebar-contributions.component';

describe('SidebarContributionsComponent', () => {
  let component: SidebarContributionsComponent;
  let fixture: ComponentFixture<SidebarContributionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarContributionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarContributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
