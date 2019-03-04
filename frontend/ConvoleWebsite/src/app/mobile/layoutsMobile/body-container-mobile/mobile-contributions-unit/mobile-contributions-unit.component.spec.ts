import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileContributionsUnitComponent } from './mobile-contributions-unit.component';

describe('MobileContributionsUnitComponent', () => {
  let component: MobileContributionsUnitComponent;
  let fixture: ComponentFixture<MobileContributionsUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileContributionsUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileContributionsUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
