import {Component, Input, OnInit} from '@angular/core';

import {Insurance} from "../../../models/insurance.model";

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.scss']
})
export class InsuranceListComponent implements OnInit {
  @Input() insuranceList: Insurance[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
