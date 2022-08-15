import {Type} from "../enums/type.enum";
import {OwnersIdEnum} from "../enums/owners-id.enum";
import {FuelType} from "../enums/fuel-types.enum";

export class Car{
  id?: number;
  brand : string;
  model : string;
  cubicCap : number;
  serialNum : string;
  type : string;
  plates : string;
  fuelType : string;
  power : number;
  ownerId : string;

  constructor(brand: string, model : string, cubicCap : number, serialNum : string, type : string,
              plates : string, fuelType : string, power : number, ownerId : string) {
    this.brand = brand;
    this.model = model;
    this.cubicCap = cubicCap;
    this.serialNum = serialNum;
    this.type = type;
    this.plates = plates;
    this.fuelType = fuelType;
    this.power = power;
    this.ownerId = ownerId;
  }
  // get brand() {
  //   return this._brand;
  // }
  // set brand(newBrand: string) {
  //   this._brand = newBrand;
  // }
  // get model() {
  //   return this._model;
  // }
  // set model(newModel) {
  //   this._model = newModel;
  // }
  // get cubicCap() {
  //   return this._cubicCap;
  // }
  // set cubicCap(newCubicCap) {
  //   if(newCubicCap > 0){
  //     this._cubicCap = newCubicCap;
  //   }else{
  //     console.log("Please insert cubicCap again !")
  //   }
  // }
  // get serialNum() {
  //   return this._serialNum;
  // }
  // set serialNum(newSerialNum) {
  //   this._serialNum = newSerialNum;
  // }
  // get type() {
  //   return this._type;
  //
  // }
  // set type(newType){
  //   this._type = newType;
  // }
  // get plates() {
  //   return this._plates;
  // }
  // set plates(newPlates) {
  //   this._plates = newPlates;
  // }
  // get fuelType() {
  //   return this._fuelType ;
  //
  // }
  // set fuelType(newFuelType) {
  //   this._fuelType = newFuelType;
  // }
  // get power() {
  //   return this._power;
  // }
  // set power(newPower){
  //   if(newPower > 0){
  //     this._power = newPower;
  //   }
  // }
  // get ownerId() {
  //   return this._ownerId;
  // }
  // set ownerId(newOwnerId) {
  //   this._ownerId = newOwnerId;
  // }
  // get id(){
  //   return this._id;
  // }
  // set id(newId: number | undefined){
  //   this._id = newId;
  // }
}

