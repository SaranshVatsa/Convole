import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContributionsUnitComponent } from './body-contributions-unit.component';

describe('BodyContributionsUnitComponent', () => {
  let component: BodyContributionsUnitComponent;
  let fixture: ComponentFixture<BodyContributionsUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyContributionsUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyContributionsUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
