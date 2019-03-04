import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyRightColumnComponent } from './body-right-column.component';

describe('BodyRightColumnComponent', () => {
  let component: BodyRightColumnComponent;
  let fixture: ComponentFixture<BodyRightColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyRightColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyRightColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
