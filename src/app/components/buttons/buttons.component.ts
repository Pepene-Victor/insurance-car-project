import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Car} from "../../models/car.model";

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Input() buttonName?: string;
  @Output() sendResetValues: EventEmitter<void> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  resetValues() {

  }
}
