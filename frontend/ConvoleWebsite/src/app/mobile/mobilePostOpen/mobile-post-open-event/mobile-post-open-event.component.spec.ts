import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePostOpenEventComponent } from './mobile-post-open-event.component';

describe('MobilePostOpenEventComponent', () => {
  let component: MobilePostOpenEventComponent;
  let fixture: ComponentFixture<MobilePostOpenEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePostOpenEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePostOpenEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
