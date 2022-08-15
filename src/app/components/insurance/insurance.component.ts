import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {
  price: number = 100.26;
  constructor() { }

  ngOnInit(): void {
  }


}
