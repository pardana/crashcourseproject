import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild-directive',
  templateUrl: './inbuild-directive.component.html',
  styleUrls: ['./inbuild-directive.component.css']
})
export class InbuildDirectiveComponent implements OnInit {

  isShow = false;
  bgColor = "red";
  constructor() { }

  ngOnInit(): void {
  }

  changeColor(){
    this.bgColor = this.bgColor == "red" ? "blue" : "red";
  }
}
