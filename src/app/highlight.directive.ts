import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {
    elem.nativeElement.style.backgroundColor = 'pink'
    elem.nativeElement.style.borderRadius = '15px'
    elem.nativeElement.style.padding = '20px'
   }
}
