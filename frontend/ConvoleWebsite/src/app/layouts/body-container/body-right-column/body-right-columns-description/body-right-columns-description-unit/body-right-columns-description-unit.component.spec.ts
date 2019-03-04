import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyRightColumnsDecriptionUnitComponent } from './body-right-columns-description-unit.component';

describe('BodyRightColumnsDecriptionUnitComponent', () => {
  let component: BodyRightColumnsDecriptionUnitComponent;
  let fixture: ComponentFixture<BodyRightColumnsDecriptionUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyRightColumnsDecriptionUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyRightColumnsDecriptionUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
