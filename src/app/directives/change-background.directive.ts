import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appChangeBackground]'
})
export class ChangeBackgroundDirective implements AfterViewInit{

  //@Input() customColor: string = 'red';
  private _defaultColor = 'red';
  @Input() appChangeBackground?: string;
  constructor(private _elRef: ElementRef) {
    console.log(this._elRef);
  }

  ngAfterViewInit(): void {
    console.log(this._elRef);
    this._elRef.nativeElement.style.backgroundColor = this.appChangeBackground || this._defaultColor;
  }

}
