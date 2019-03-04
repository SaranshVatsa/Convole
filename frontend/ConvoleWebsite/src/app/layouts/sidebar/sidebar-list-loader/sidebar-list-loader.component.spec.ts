import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarListLoaderComponent } from './sidebar-list-loader.component';

describe('SidebarListLoaderComponent', () => {
  let component: SidebarListLoaderComponent;
  let fixture: ComponentFixture<SidebarListLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarListLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarListLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
