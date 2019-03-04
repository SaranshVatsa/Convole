import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileRightContainerComponent } from './mobile-right-container.component';

describe('MobileRightContainerComponent', () => {
  let component: MobileRightContainerComponent;
  let fixture: ComponentFixture<MobileRightContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileRightContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileRightContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
