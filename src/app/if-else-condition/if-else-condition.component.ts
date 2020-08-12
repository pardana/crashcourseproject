import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-else-condition',
  templateUrl: './if-else-condition.component.html',
  styleUrls: ['./if-else-condition.component.css']
})
export class IfElseConditionComponent implements OnInit {

  isTeacher = true;
  constructor() { }

  ngOnInit(): void {
  }

}
