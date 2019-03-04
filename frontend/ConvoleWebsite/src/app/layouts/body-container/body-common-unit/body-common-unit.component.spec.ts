import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCommonUnitComponent } from './body-common-unit.component';

describe('BodyCommonUnitComponent', () => {
  let component: BodyCommonUnitComponent;
  let fixture: ComponentFixture<BodyCommonUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyCommonUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyCommonUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
