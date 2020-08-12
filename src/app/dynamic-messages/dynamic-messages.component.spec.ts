import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicMessagesComponent } from './dynamic-messages.component';

describe('DynamicMessagesComponent', () => {
  let component: DynamicMessagesComponent;
  let fixture: ComponentFixture<DynamicMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
