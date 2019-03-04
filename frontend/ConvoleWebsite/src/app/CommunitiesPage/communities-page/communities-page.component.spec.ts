import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitiesPageComponent } from './communities-page.component';

describe('CommunitiesPageComponent', () => {
  let component: CommunitiesPageComponent;
  let fixture: ComponentFixture<CommunitiesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunitiesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
