import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarActivitiesComponent } from './sidebar-activities.component';

describe('SidebarActivitiesComponent', () => {
  let component: SidebarActivitiesComponent;
  let fixture: ComponentFixture<SidebarActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
