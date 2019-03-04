import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarColumnsComponent } from './sidebar-columns.component';

describe('SidebarColumnsComponent', () => {
  let component: SidebarColumnsComponent;
  let fixture: ComponentFixture<SidebarColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
