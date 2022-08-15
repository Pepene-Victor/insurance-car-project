import { Pipe, PipeTransform } from '@angular/core';
import {Car} from "../models/car.model";

@Pipe({
  name: 'myFirstPipe'
})
export class MyFirstPipePipe implements PipeTransform {

  transform(value: Car, ...args: string[]): string {
    // const formattedString = value.brand + '-' + value.model;
    const separator = args.length ? args[0] : ' ';
    return `${value.brand}${separator}${value.model}`;

  }

}
