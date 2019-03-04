import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePostCreateObjectComponent } from './mobile-post-create-object.component';

describe('MobilePostCreateObjectComponent', () => {
  let component: MobilePostCreateObjectComponent;
  let fixture: ComponentFixture<MobilePostCreateObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePostCreateObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePostCreateObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
