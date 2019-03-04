import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOpenDiscussionWithoutImageComponent } from './post-open-discussion-without-image.component';

describe('PostOpenDiscussionWithoutImageComponent', () => {
  let component: PostOpenDiscussionWithoutImageComponent;
  let fixture: ComponentFixture<PostOpenDiscussionWithoutImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOpenDiscussionWithoutImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOpenDiscussionWithoutImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
