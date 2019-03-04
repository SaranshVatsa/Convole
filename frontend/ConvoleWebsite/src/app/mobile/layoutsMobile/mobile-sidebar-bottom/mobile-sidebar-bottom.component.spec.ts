import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSidebarBottomComponent } from './mobile-sidebar-bottom.component';

describe('MobileSidebarBottomComponent', () => {
  let component: MobileSidebarBottomComponent;
  let fixture: ComponentFixture<MobileSidebarBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileSidebarBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSidebarBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
