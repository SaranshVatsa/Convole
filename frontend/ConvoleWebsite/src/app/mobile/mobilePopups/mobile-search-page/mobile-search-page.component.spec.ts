import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSearchPageComponent } from './mobile-search-page.component';

describe('MobileSearchPageComponent', () => {
  let component: MobileSearchPageComponent;
  let fixture: ComponentFixture<MobileSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileSearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
