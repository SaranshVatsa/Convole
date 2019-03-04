import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitiesSelectionCommunitiesUnitComponent } from './communities-selection-communities-unit.component';

describe('CommunitiesSelectionCommunitiesUnitComponent', () => {
  let component: CommunitiesSelectionCommunitiesUnitComponent;
  let fixture: ComponentFixture<CommunitiesSelectionCommunitiesUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunitiesSelectionCommunitiesUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitiesSelectionCommunitiesUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
