import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styling',
  templateUrl: './styling.component.html',
  styleUrls: ['./styling.component.css']
})
export class StylingComponent implements OnInit {

  backgroundColor = "Yellow";
  num1 = 5;
  constructor() { }

  ngOnInit(): void {
  }

}
