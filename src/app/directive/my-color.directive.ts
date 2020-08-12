import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyColor]'
})
export class MyColorDirective {

  constructor(private elementRef: ElementRef) { 
    this.elementRef.nativeElement.style.color = "Red";
    this.elementRef.nativeElement.style.fontSize = "120px";
  }

}
