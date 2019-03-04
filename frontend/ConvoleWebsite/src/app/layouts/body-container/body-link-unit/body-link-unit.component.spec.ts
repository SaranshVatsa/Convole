import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyLinkObjectComponent } from './body-link-unit.component';

describe('BodyLinkObjectComponent', () => {
  let component: BodyLinkObjectComponent;
  let fixture: ComponentFixture<BodyLinkObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyLinkObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyLinkObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
