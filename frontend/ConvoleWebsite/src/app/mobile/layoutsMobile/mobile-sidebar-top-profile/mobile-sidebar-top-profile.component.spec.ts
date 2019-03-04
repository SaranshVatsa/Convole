import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSidebarTopProfileComponent } from './mobile-sidebar-top-profile.component';

describe('MobileSidebarTopProfileComponent', () => {
  let component: MobileSidebarTopProfileComponent;
  let fixture: ComponentFixture<MobileSidebarTopProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileSidebarTopProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSidebarTopProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
