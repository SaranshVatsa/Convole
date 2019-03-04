import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCreateLinkComponent } from './post-create-link.component';

describe('PostCreateLinkComponent', () => {
  let component: PostCreateLinkComponent;
  let fixture: ComponentFixture<PostCreateLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCreateLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCreateLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
