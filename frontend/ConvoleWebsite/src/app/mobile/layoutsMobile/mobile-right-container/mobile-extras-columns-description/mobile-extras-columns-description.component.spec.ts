import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileExtrasColumnsDescriptionComponent } from './mobile-extras-columns-description.component';

describe('MobileExtrasColumnsDescriptionComponent', () => {
  let component: MobileExtrasColumnsDescriptionComponent;
  let fixture: ComponentFixture<MobileExtrasColumnsDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileExtrasColumnsDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileExtrasColumnsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
