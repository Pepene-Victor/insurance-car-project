import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Car} from "../../../models/car.model";
import {Insurance} from "../../../models/insurance.model";

@Component({
  selector: 'app-insurance-wrapper',
  templateUrl: './insurance-wrapper.component.html',
  styleUrls: ['./insurance-wrapper.component.scss']
})
export class InsuranceWrapperComponent implements OnInit {

  insuranceList:Insurance[] = [];
  constructor() { }

  ngOnInit(): void {

  }
  addInsuranceToList(insurance: Insurance){
    console.log("Add insurance list")
    this.insuranceList.push(insurance);
    console.log('new list', this.insuranceList);

  }


}
