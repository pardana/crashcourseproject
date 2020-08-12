import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-dynamic-messages',
  templateUrl: './dynamic-messages.component.html',
  styleUrls: ['./dynamic-messages.component.css']
})
export class DynamicMessagesComponent implements OnInit {
  message: string = "This is a dynamic message";

  constructor() { }

  ngOnInit(): void {
  }

}
