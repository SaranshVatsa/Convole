import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCreateEventComponent } from './post-create-event.component';

describe('PostCreateEventComponent', () => {
  let component: PostCreateEventComponent;
  let fixture: ComponentFixture<PostCreateEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCreateEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCreateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
