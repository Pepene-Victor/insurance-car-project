import { Pipe, PipeTransform } from '@angular/core';
import {Car} from "../models/car.model";

@Pipe({
  name: 'carPlates'
})
export class CarPlatesPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    let toEdit = value;
    const regex = /([a-zA-Z]{1,2})([0-9]{2,3})([a-zA-Z]{3})$/;
    const match = regex.exec(toEdit);
    if(match){
      return match[0].toUpperCase().split(/(\d+)/).join('-');
    }

    return "Incorrect";

  }

}
