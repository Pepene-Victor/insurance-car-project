import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Owners} from "../../../models/owner.model";

@Component({
  selector: 'app-owners-list',
  templateUrl: './owners-list.component.html',
  styleUrls: ['./owners-list.component.scss']
})
export class OwnersListComponent implements OnInit {
  @Input() ownersList: Owners[] = [];
  @Output() editOwnerClicked: EventEmitter<Owners> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {

  }

  editOwner(index : number) {
    this.editOwnerClicked.emit(this.ownersList[index]);
  }


}
