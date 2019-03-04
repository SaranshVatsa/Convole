import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePostCreateDiscussionComponent } from './mobile-post-create-discussion.component';

describe('MobilePostCreateDiscussionComponent', () => {
  let component: MobilePostCreateDiscussionComponent;
  let fixture: ComponentFixture<MobilePostCreateDiscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePostCreateDiscussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePostCreateDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
