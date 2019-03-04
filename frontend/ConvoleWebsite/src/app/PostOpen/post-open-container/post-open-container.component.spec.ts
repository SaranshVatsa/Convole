import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOpenContainerComponent } from './post-open-container.component';

describe('PostOpenContainerComponent', () => {
  let component: PostOpenContainerComponent;
  let fixture: ComponentFixture<PostOpenContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOpenContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOpenContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
