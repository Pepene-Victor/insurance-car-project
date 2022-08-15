import {Component, Input, OnInit} from '@angular/core';
import {Owners} from "../../models/owner.model";

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
