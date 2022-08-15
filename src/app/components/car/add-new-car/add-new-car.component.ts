import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Car} from "../../../models/car.model";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {OutputHashing} from "@angular-devkit/build-angular";

@Component({
  selector: 'app-add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.scss']
})
export class AddNewCarComponent implements OnInit {


  @Output() addNewCarClicked: EventEmitter<Car> = new EventEmitter();
  selectedCar?: Car;
  @Input() set carToEdit(car: Car){
    this.selectedCar = car;
    this.patchFormValue(car);
  }
  @Output() modifiedCar: EventEmitter<Car> = new EventEmitter();
  id: number = 0;
  carForm?: FormGroup;

  prefilledCar = {
    brand: 'BMW',
    model: '525i',
    cubicCap: 2000,
    vin: 'qwertyui',
    owner: '13',
    type: 'sedan',
    plates: '13',
    power: 192,
    fuelType: 'gasoline'
  }
  //Form group {
  // FormControl,
  //FormControl,
  //FormControl,
//}
  constructor(private _fb: FormBuilder) {
    // this.carForm = new FormGroup({
    //   brand: new FormControl('BMW'),
    //   model: new FormControl('535'),
    //
    // })
    if(this.carForm?.status == "INVALID"){
      return
    }
    this.createForm();

  }
  ngOnInit(): void {
  }

  createForm() {
    this.carForm = this._fb.group({
      brand: [null, Validators.required],
      model: [null, Validators.maxLength(10)],
      cubicCap: [null, [Validators.required, Validators.min(1000), Validators.max(5000)]],
      serialNum: [null],
      type: ['12'],
      plates: [{value: null, disabled: false}],
      fuelType: ['Gasoline'],
      power: [null],
      ownerId: ['1'],
    })
  }

  submitForm() {
    // if(this.carForm?.status === 'INVALID') return;
    console.log('mi form is: ', this.carForm);
    const car = this.carForm?.value;
    console.log('new created car: ', car);

    if (!!this.selectedCar) {
      car.id = this.selectedCar.id;
      this.modifiedCar.emit(car);

    } else {
      this.id++;
      car.id = this.id;
      this.addNewCarClicked.emit(car);
    }

    this.carForm?.reset();

  }

  //   const formValues=form.form.value;
  //   const car = new Car(
  //     formValues.carName,
  //     formValues.carModel,
  //     formValues.cubicCap,
  //     formValues.carSerialNum,
  //     formValues.carType,
  //     formValues.carPlates,
  //     formValues.fuelType,
  //     formValues.carPower,
  //     formValues.options
  //   )}

resetValues()
{
  this.carForm?.reset();
}

patchFormValue(car: Car)
{
  this.carForm?.patchValue(car);
}
}
