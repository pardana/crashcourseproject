import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent implements OnInit {

  colourList = ['Red', 'Green', 'Blue', 'Yellow', 'Orange'];
  constructor() { }

  ngOnInit(): void {
  }

}
