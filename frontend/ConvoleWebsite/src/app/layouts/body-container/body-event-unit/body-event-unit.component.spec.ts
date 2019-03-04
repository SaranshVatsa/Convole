import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyEventUnitComponent } from './body-event-unit.component';

describe('BodyEventUnitComponent', () => {
  let component: BodyEventUnitComponent;
  let fixture: ComponentFixture<BodyEventUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyEventUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyEventUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
