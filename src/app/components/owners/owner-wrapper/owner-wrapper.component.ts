import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Car} from "../../../models/car.model";
import {Owners} from "../../../models/owner.model";
import {Insurance} from "../../../models/insurance.model";


@Component({
  selector: 'app-owner-wrapper',
  templateUrl: './owner-wrapper.component.html',
  styleUrls: ['./owner-wrapper.component.scss']
})
export class OwnerWrapperComponent implements OnInit {

  ownersList: Owners[] = [];
  owner?: Owners;

  constructor() {
  }

  ngOnInit(): void {


  }

  addOwnerToList(owner: Owners) {
    console.log("Add owner list")
    this.ownersList.push(owner);

    console.log('new list', this.ownersList);

  }

  selectedOwner(owner: Owners) {
    this.owner = owner;
    console.log("selected owner", this.owner);
  }
  updateSelectedOwner(owner: Owners) {
    for (let i: number = 0; i < this.ownersList.length; i++) {
      if (this.ownersList[i].id == owner.id) {
        this.ownersList[i] = owner;
      }
    }
    this.owner = undefined;


  }


}
