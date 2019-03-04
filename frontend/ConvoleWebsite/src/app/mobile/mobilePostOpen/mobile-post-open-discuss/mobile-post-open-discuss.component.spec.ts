import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePostOpenDiscussComponent } from './mobile-post-open-discuss.component';

describe('MobilePostOpenDiscussComponent', () => {
  let component: MobilePostOpenDiscussComponent;
  let fixture: ComponentFixture<MobilePostOpenDiscussComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePostOpenDiscussComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePostOpenDiscussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
