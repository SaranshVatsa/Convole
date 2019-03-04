import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyObjectUnitComponent } from './body-object-unit.component';

describe('BodyObjectUnitComponent', () => {
  let component: BodyObjectUnitComponent;
  let fixture: ComponentFixture<BodyObjectUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyObjectUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyObjectUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
