import {AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appInputFocus]'
})
export class InputFocusDirective implements AfterViewInit{

  constructor(private _elRef: ElementRef) { }

  ngAfterViewInit(): void {
    this._elRef.nativeElement.focus();
  }

}
