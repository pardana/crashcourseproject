import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styling-css-class',
  templateUrl: './styling-css-class.component.html',
  styleUrls: ['./styling-css-class.component.css']
})
export class StylingCssClassComponent implements OnInit {

  num1 = 5;
  myCssClassName = "fancyDiv";
  
  constructor() { }

  ngOnInit(): void {
  }

}
