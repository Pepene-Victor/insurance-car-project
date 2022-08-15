import {CardIdEnum} from "../enums/cardId.enum";

import {PaymentType} from "../enums/payment-type.enum";
import {PersonId} from "../enums/person-id.enum";

export class Insurance {
  private _companyName : string;
  private _personId : PersonId;
  private _carId : CardIdEnum;
  private _directPay : boolean;
  private _paymentType : PaymentType;
  private _start : Date;
  private _end : Date;
  private _price : number;
  private _notes : string;

  constructor(companyName : string,
              personId : PersonId,
              carId : CardIdEnum, directPay : boolean,
              paymentType : PaymentType,
              start : Date,
              end : Date,
              price : number,
              notes : string) {
    this._companyName = companyName;
    this._personId = personId;
    this._carId = carId;
    this._directPay = directPay;
    this._paymentType = paymentType;
    this._start = start;
    this._end = end;
    this._price = price;
    this._notes = notes;
  }

  get companyName() {
    return this._companyName;
  }
  set companyName(newCompanyName){

    this._companyName = newCompanyName;
  }
  get personId() {
    return this._personId;
  }
  set personId(newPersonID) {
    this._personId = newPersonID;
  }
  get carId() {
    return this._carId;
  }
  set carId(newCarId){
    this._carId = newCarId;
  }
  get directPay() {
    return this._directPay;
  }
  set directPay(newDirectPay){
    this._directPay = newDirectPay;
  }
  get paymentType() {
    return this._paymentType;
  }
  set paymentType(newPaymentType){
    this._paymentType = newPaymentType;
  }
  get start() {
    return this._start;
  }
  set start(newStartDate) {
    this._start = newStartDate;
  }
  get end() {
    return this._end;
  }
  set end(newEndDate) {
    this._end = newEndDate;
  }
  get price() {
    return this._price;
  }
  set price(newInsurancePrice) {
    if(newInsurancePrice > 0){
      this._price = newInsurancePrice;
    }
  }
  get notes() {
    return this._notes;
  }
  set notes(newNotes){
    this._notes = newNotes;
  }

}
