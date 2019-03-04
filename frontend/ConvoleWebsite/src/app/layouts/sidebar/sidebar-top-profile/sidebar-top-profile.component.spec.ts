import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarTopProfileComponent } from './sidebar-top-profile.component';

describe('SidebarTopProfileComponent', () => {
  let component: SidebarTopProfileComponent;
  let fixture: ComponentFixture<SidebarTopProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarTopProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarTopProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
