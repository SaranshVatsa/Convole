import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightColumnHomeComponent } from './right-column-home.component';

describe('RightColumnHomeComponent', () => {
  let component: RightColumnHomeComponent;
  let fixture: ComponentFixture<RightColumnHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightColumnHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightColumnHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
