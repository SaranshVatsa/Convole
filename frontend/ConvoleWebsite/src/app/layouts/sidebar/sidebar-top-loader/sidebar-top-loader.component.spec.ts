import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarTopLoaderComponent } from './sidebar-top-loader.component';

describe('SidebarTopLoaderComponent', () => {
  let component: SidebarTopLoaderComponent;
  let fixture: ComponentFixture<SidebarTopLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarTopLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarTopLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
