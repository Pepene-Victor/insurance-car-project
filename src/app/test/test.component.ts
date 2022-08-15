import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  value = false;
  checked?: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  change(){
    this.value =! this.value;
  }


}
