import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileImageUnitComponent } from './mobile-image-unit.component';

describe('MobileImageUnitComponent', () => {
  let component: MobileImageUnitComponent;
  let fixture: ComponentFixture<MobileImageUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileImageUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileImageUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
