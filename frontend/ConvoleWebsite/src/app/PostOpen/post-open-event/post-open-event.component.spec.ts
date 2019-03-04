import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOpenEventComponent } from './post-open-event.component';

describe('PostOpenEventComponent', () => {
  let component: PostOpenEventComponent;
  let fixture: ComponentFixture<PostOpenEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOpenEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOpenEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
