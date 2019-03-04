import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOpenObjectComponent } from './post-open-object.component';

describe('PostOpenObjectComponent', () => {
  let component: PostOpenObjectComponent;
  let fixture: ComponentFixture<PostOpenObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOpenObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOpenObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
