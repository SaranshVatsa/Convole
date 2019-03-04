import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupsSearchComponent } from './popups-search.component';

describe('PopupsSearchComponent', () => {
  let component: PopupsSearchComponent;
  let fixture: ComponentFixture<PopupsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
