import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCreateObjectComponent } from './post-create-object.component';

describe('PostCreateObjectComponent', () => {
  let component: PostCreateObjectComponent;
  let fixture: ComponentFixture<PostCreateObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCreateObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCreateObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
