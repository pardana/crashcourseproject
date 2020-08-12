import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InbuildDirectiveComponent } from './inbuild-directive.component';

describe('InbuildDirectiveComponent', () => {
  let component: InbuildDirectiveComponent;
  let fixture: ComponentFixture<InbuildDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InbuildDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InbuildDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
