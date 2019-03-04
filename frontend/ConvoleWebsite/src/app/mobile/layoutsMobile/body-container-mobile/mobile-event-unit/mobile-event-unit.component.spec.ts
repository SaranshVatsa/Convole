import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileEventUnitComponent } from './mobile-event-unit.component';

describe('MobileEventUnitComponent', () => {
  let component: MobileEventUnitComponent;
  let fixture: ComponentFixture<MobileEventUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileEventUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileEventUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
