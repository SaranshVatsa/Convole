import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePostOpenPageComponent } from './mobile-post-open-page.component';

describe('MobilePostOpenPageComponent', () => {
  let component: MobilePostOpenPageComponent;
  let fixture: ComponentFixture<MobilePostOpenPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePostOpenPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePostOpenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
