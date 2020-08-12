import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-event',
  templateUrl: './click-event.component.html',
  styleUrls: ['./click-event.component.css']
})
export class ClickEventComponent implements OnInit {

  message : string = "Hello how are you?";
  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(){
    this.message = "I'm Fine";
    
    let myMessage = "Hello";
    myMessage = "Hi";
  }

  onMessageClick(){
    this.message = "You clicked the message it self"
  }
}
