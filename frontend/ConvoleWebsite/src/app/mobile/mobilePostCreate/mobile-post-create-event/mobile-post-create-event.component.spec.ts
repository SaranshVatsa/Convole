import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePostCreateEventComponent } from './mobile-post-create-event.component';

describe('MobilePostCreateEventComponent', () => {
  let component: MobilePostCreateEventComponent;
  let fixture: ComponentFixture<MobilePostCreateEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePostCreateEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePostCreateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
