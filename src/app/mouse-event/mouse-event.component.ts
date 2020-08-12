import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-mouse-event',
  templateUrl: './mouse-event.component.html',
  styleUrls: ['./mouse-event.component.css']
})
export class MouseEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('mouseenter') myMouseEnterEvent(){
    alert("Mouse just Enter inside the component");
  }

  @HostListener('mouseleave') myMouseLeaveEvent(){
    alert("Mouse just Leave the component");
  }
}
