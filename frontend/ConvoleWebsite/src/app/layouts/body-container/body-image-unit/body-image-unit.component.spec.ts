import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyImageUnitComponent } from './body-image-unit.component';

describe('BodyImageUnitComponent', () => {
  let component: BodyImageUnitComponent;
  let fixture: ComponentFixture<BodyImageUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyImageUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyImageUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
