import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupsSearchUnitComponent } from './popups-search-unit.component';

describe('PopupsSearchUnitComponent', () => {
  let component: PopupsSearchUnitComponent;
  let fixture: ComponentFixture<PopupsSearchUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupsSearchUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupsSearchUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
