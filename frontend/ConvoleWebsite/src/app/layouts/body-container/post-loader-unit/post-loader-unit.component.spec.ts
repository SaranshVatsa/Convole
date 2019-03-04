import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLoaderUnitComponent } from './post-loader-unit.component';

describe('PostLoaderUnitComponent', () => {
  let component: PostLoaderUnitComponent;
  let fixture: ComponentFixture<PostLoaderUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostLoaderUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLoaderUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
