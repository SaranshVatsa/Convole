import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyDiscussionUnitComponent } from './body-discussion-unit.component';

describe('BodyDiscussionObjectComponent', () => {
  let component: BodyDiscussionUnitComponent;
  let fixture: ComponentFixture<BodyDiscussionUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyDiscussionUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyDiscussionUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
