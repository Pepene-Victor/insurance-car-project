import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Car} from "../../../models/car.model";
import {FuelType} from "../../../enums/fuel-types.enum";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {


  @Input() carList: Car[] = [];
  @Output() selectedCarClicked: EventEmitter<Car> = new EventEmitter();
  fuelType: FuelType = FuelType.BIODIESEL;
  FuelType = FuelType;
  constructor() {
    switch(this.fuelType){
      case FuelType.BIODIESEL:
        console.log("diesel");
        break;
      case FuelType.HYBRID:
        console.log("hybrid");
        break;
      default:
        console.log("default");


    }
  }

  ngOnInit(): void {
    console.log("Length list : ", this.carList.length)

  }

  editCar(i: number) {
    this.selectedCarClicked.emit(this.carList[i]);


  }
}
