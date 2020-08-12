import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylingCssClassComponent } from './styling-css-class.component';

describe('StylingCssClassComponent', () => {
  let component: StylingCssClassComponent;
  let fixture: ComponentFixture<StylingCssClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylingCssClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylingCssClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
