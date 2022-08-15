import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Car} from "../../../models/car.model";
import {Insurance} from "../../../models/insurance.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-new-insurance',
  templateUrl: './new-insurance.component.html',
  styleUrls: ['./new-insurance.component.scss']
})
export class NewInsuranceComponent implements OnInit {
  @Output() addNewInsuranceClicked: EventEmitter<Insurance> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  submitFormInsurance(form: NgForm) {

    const formValues=form.form.value;
    const insurance = new Insurance(
      formValues.insuranceCompany,
      formValues.insurancePersonId,
      formValues.insuranceCarId,
      formValues.insuranceDirectPay,
      formValues.insurancePaymentType,
      formValues.insuranceStarDate,
      formValues.insuranceEndDate,
      formValues.insurancePrice,
      formValues.insuranceNotes
    )
    form.form.reset();
    this.addNewInsuranceClicked.emit(insurance);

  }

}
