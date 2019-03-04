import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOpenDiscussionComponent } from './post-open-discussion.component';

describe('PostOpenDiscussionComponent', () => {
  let component: PostOpenDiscussionComponent;
  let fixture: ComponentFixture<PostOpenDiscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOpenDiscussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOpenDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
