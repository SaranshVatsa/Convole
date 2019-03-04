import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAccountsComponent } from './sidebar-accounts.component';

describe('SidebarAccountsComponent', () => {
  let component: SidebarAccountsComponent;
  let fixture: ComponentFixture<SidebarAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
