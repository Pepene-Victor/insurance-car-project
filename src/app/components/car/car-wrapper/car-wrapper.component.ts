import {Component, Input, OnInit} from '@angular/core';
import {FuelType} from "../../../enums/fuel-types.enum";
import {FormGroup, NgForm} from "@angular/forms";
import {Car} from "../../../models/car.model";

@Component({
  selector: 'app-car-wrapper',
  templateUrl: './car-wrapper.component.html',
  styleUrls: ['./car-wrapper.component.scss']
})
export class CarWrapperComponent implements OnInit {

  carList: Car[] = [];
  customInput: number = 2000;
  FuelType = FuelType;
  @Input() unInput: string | undefined;
  selectedCar?: Car;

  /*
  In proiectul de test

  1.cream o componenta car-wrapper:
      -contine CarHeader
      -contine CarDetails
      2. In carwarapper definim o lista de Cars, title: string
      -contine 3 obiecte lista
      3. in carHeader un input: string => primeste valoarea din parinte
          -afisam titlul in header.html
       4. In carDetails input: Car ==> primeste al 2 lea obiect din lista
          -afisam cu cosnole.log() valoarea la input
   */

  constructor() { }

  ngOnInit(): void {
    console.log('din app component', this.unInput);
  }
  //
  // submitForm(form: NgForm) {
  //   console.log('my form is: ',form)
  //   const formValues=form.form.value;
  //   const car = new Car(
  //     formValues.carModel,
  //     formValues.carName,
  //     formValues.cubicCap,
  //     formValues.carSerialNum,
  //     formValues.carType,
  //     formValues.carPlates,
  //     formValues.fuelType,
  //     formValues.carPower,
  //     formValues.options
  //   )
  //   this.carList.push(car);
  //   console.log('carList ===>', this.carList);
  //   form.form.reset();
  //
  // }
  // metoda() {
  //   this.unInput = "Ceva trimis";
  // }
  addCarToList(car: Car){
    console.log("Add car list")
    this.carList.push(car);
    console.log('new list', this.carList);

  }
  saveSelectedCar(selectedCar: Car) {
    this.selectedCar = selectedCar;
  }
  updateCar(car: Car){
    for (let i: number = 0; i < this.carList.length; i++) {
      if (this.carList[i].id == car.id) {
        this.carList[i] = car;
      }
    }
    this.selectedCar = undefined;

  }


}
