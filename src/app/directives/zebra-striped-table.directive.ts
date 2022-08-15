import {AfterViewInit, Directive, ElementRef, EventEmitter, Input} from '@angular/core';
import {Car} from "../models/car.model";

@Directive({
  selector: '[appZebraStripedTable]'
})
export class ZebraStripedTableDirective implements AfterViewInit {
  @Input() appZebraStripedTable: number = -1;

  constructor(private _elRef: ElementRef) {
  }

  ngAfterViewInit(): void {

    if (this.appZebraStripedTable % 2 == 0) {
      this._elRef.nativeElement.style.backgroundColor = 'rgba(100, 100, 115, 0.5)';
    }

  }

}
