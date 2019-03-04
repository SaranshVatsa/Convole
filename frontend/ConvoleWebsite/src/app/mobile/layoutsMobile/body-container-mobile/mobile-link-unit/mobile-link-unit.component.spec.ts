import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileLinkUnitComponent } from './mobile-link-unit.component';

describe('MobileLinkUnitComponent', () => {
  let component: MobileLinkUnitComponent;
  let fixture: ComponentFixture<MobileLinkUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileLinkUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileLinkUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
