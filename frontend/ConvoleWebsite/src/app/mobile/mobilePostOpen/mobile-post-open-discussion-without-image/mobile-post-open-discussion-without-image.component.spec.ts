import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePostOpenDiscussionWithoutImageComponent } from './mobile-post-open-discussion-without-image.component';

describe('MobilePostOpenDiscussionWithoutImageComponent', () => {
  let component: MobilePostOpenDiscussionWithoutImageComponent;
  let fixture: ComponentFixture<MobilePostOpenDiscussionWithoutImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePostOpenDiscussionWithoutImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePostOpenDiscussionWithoutImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
