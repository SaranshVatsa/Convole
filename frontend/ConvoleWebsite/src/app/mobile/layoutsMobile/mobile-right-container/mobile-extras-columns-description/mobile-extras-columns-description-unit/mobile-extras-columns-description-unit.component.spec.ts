import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileExtrasColumnsDescriptionUnitComponent } from './mobile-extras-columns-description-unit.component';

describe('MobileExtrasColumnsDescriptionUnitComponent', () => {
  let component: MobileExtrasColumnsDescriptionUnitComponent;
  let fixture: ComponentFixture<MobileExtrasColumnsDescriptionUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileExtrasColumnsDescriptionUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileExtrasColumnsDescriptionUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
