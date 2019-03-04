import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyRightColumnsDescriptionComponent } from './body-right-columns-description.component';

describe('BodyRightColumnsDescriptionComponent', () => {
  let component: BodyRightColumnsDescriptionComponent;
  let fixture: ComponentFixture<BodyRightColumnsDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyRightColumnsDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyRightColumnsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
