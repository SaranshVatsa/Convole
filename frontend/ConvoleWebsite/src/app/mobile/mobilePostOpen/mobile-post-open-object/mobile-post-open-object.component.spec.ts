import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePostOpenObjectComponent } from './mobile-post-open-object.component';

describe('MobilePostOpenObjectComponent', () => {
  let component: MobilePostOpenObjectComponent;
  let fixture: ComponentFixture<MobilePostOpenObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePostOpenObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePostOpenObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
