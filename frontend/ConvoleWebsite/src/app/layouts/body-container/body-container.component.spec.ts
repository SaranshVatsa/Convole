import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContainerComponent } from './body-container.component';

describe('BodyContainerComponent', () => {
  let component: BodyContainerComponent;
  let fixture: ComponentFixture<BodyContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
