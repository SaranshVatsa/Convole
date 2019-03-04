import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCommonUnitComponent } from './mobile-common-unit.component';

describe('MobileCommonUnitComponent', () => {
  let component: MobileCommonUnitComponent;
  let fixture: ComponentFixture<MobileCommonUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileCommonUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileCommonUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
