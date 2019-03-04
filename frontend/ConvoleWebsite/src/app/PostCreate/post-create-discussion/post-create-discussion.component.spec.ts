import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCreateDiscussionComponent } from './post-create-discussion.component';

describe('PostCreateDiscussionComponent', () => {
  let component: PostCreateDiscussionComponent;
  let fixture: ComponentFixture<PostCreateDiscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCreateDiscussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCreateDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
