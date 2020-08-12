import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticMessagesComponent } from './static-messages.component';

describe('StaticMessagesComponent', () => {
  let component: StaticMessagesComponent;
  let fixture: ComponentFixture<StaticMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
