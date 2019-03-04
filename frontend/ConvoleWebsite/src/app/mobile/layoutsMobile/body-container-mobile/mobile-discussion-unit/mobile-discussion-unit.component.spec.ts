import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDiscussionUnitComponent } from './mobile-discussion-unit.component';

describe('MobileDiscussionUnitComponent', () => {
  let component: MobileDiscussionUnitComponent;
  let fixture: ComponentFixture<MobileDiscussionUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileDiscussionUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDiscussionUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
