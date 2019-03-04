import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePostCreateLinkComponent } from './mobile-post-create-link.component';

describe('MobilePostCreateLinkComponent', () => {
  let component: MobilePostCreateLinkComponent;
  let fixture: ComponentFixture<MobilePostCreateLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePostCreateLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePostCreateLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
