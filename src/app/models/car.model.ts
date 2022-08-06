import {Type} from "../enums/type.enum";
import {OwnersIdEnum} from "../enums/owners-id.enum";
import {FuelType} from "../enums/fuel-types.enum";

export class Car{
  private _brand : string;
  private _model : string;
  private _cubicCap : number;
  private _serialNum : string;
  private _type : Type;
  private _plates : string;
  private _fuelType : FuelType;
  private _power : number;
  private _ownerId : OwnersIdEnum;

  constructor(brand : string, model : string, cubicCap : number, serialNum : string, type : Type,
              plates : string, fuelType : FuelType, power : number, ownerId : OwnersIdEnum) {
    this._brand = brand;
    this._model = model;
    this._cubicCap = cubicCap;
    this._serialNum = serialNum;
    this._type = type;
    this._plates = plates;
    this._fuelType = fuelType;
    this._power = power;
    this._ownerId = ownerId;
  }
  get brand() {
    return this._brand;
  }
  set brand(newBrand: string) {
    this._brand = newBrand;
  }
  get model() {
    return this._model;
  }
  set model(newModel) {
    this._model = newModel;
  }
  get cubicCap() {
    return this._cubicCap;
  }
  set cubicCap(newCubicCap) {
    if(newCubicCap > 0){
      this._cubicCap = newCubicCap;
    }else{
      console.log("Please insert cubicCap again !")
    }
  }
  get serialNum() {
    return this._serialNum;
  }
  set serialNum(newSerialNum) {
    this._serialNum = newSerialNum;
  }
  get type() {
    return this._type;

  }
  set type(newType){
    this._type = newType;
  }
  get plates() {
    return this._plates;
  }
  set plates(newPlates) {
    this._plates = newPlates;
  }
  get fuelType() {
    return this._fuelType ;

  }
  set fuelType(newFuelType) {
    this._fuelType = newFuelType;
  }
  get power() {
    return this._power;
  }
  set power(newPower){
    if(newPower > 0){
      this._power = newPower;
    }
  }
  get ownerId() {
    return this._ownerId;
  }
  set ownerId(newOwnerId) {
    this._ownerId = newOwnerId;
  }
}

