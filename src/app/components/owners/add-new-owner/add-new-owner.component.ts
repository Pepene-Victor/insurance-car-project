import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Car} from "../../../models/car.model";
import {Owners} from "../../../models/owner.model";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-add-new-owner',
  templateUrl: './add-new-owner.component.html',
  styleUrls: ['./add-new-owner.component.scss']
})
export class AddNewOwnerComponent implements OnInit {
  @Output() addNewOwnerClicked: EventEmitter<Owners> = new EventEmitter()
  selectedOwner?: Owners;
  @Input() set ownerToSet(owner: Owners){
    this.selectedOwner = owner;
    this.patchFormValue(owner);
  }
  @Output() modifiedOwner: EventEmitter<Owners> = new EventEmitter()
  id: number = 0;
  ownerForm?: FormGroup;
  componentTitle: string = 'Add owner'
  myDate: Date = new Date();

  constructor(private _fb: FormBuilder) {
    if(this.ownerForm?.status == "INVALID"){
      return
    }
    this.createForm();
  }


  createForm() {

    this.ownerForm = this._fb.group({
      firstName: [''],
      lastName: [null, Validators.maxLength(10)],
      cnp: [null],
      birtDate: [null],
      gender: [''],

    })
  }
  ngOnInit(): void {
  }

  submitForm() {
    console.log('my form is: ', this.ownerForm);
    const newOwner: Owners = this.ownerForm?.value;
    if (!!this.selectedOwner) {
      newOwner.id = this.selectedOwner.id;
      this.modifiedOwner.emit(newOwner);
    } else {
      this.id++;
      newOwner.id = this.id;
      this.addNewOwnerClicked.emit(newOwner);
    }

    this.ownerForm?.reset();


  }
  patchFormValue(owner: Owners)
  {
    if (!!this.selectedOwner){
      //this.ownerForm?.patchValue(owner);
      this.ownerForm?.controls.firstName.patchValue(owner.firstName);
      this.ownerForm?.controls.lastName.patchValue(owner.lastName);
      this.ownerForm?.controls.cnp.patchValue(owner.cnp);
      this.ownerForm?.controls.birtDate.patchValue(owner.birtDate);
      this.ownerForm?.controls.gender.patchValue(owner.gender);
    }

  }


}
