import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOpenDiscussComponent } from './post-open-discuss.component';

describe('PostOpenDiscussComponent', () => {
  let component: PostOpenDiscussComponent;
  let fixture: ComponentFixture<PostOpenDiscussComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOpenDiscussComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOpenDiscussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
