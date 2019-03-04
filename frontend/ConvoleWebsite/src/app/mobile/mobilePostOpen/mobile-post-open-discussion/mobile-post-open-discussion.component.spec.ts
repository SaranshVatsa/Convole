import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePostOpenDiscussionComponent } from './mobile-post-open-discussion.component';

describe('MobilePostOpenDiscussionComponent', () => {
  let component: MobilePostOpenDiscussionComponent;
  let fixture: ComponentFixture<MobilePostOpenDiscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePostOpenDiscussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePostOpenDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
