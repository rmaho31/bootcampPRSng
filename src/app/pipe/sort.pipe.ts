import { Pipe, PipeTransform } from '@angular/core';
import { isString } from 'util';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let arrObjects = value;
    let column = args.sortBy;
    let direction = args.direction;

    return arrObjects.sort((a, b) => {
      let result = 0;
      if(isNaN(parseFloat(a[column])) || isNaN(parseFloat(b[column]))) {
        if(a[column].toLocaleLowerCase() > b[column].toLocaleLowerCase()) 
        result = 1 * direction;
      else if(a[column].toLocaleLowerCase() < b[column].toLocaleLowerCase()) 
        result = -1 * direction;
      return result;
      } else {
        if(a[column] > b[column]) 
          result = 1 * direction;
        else if(a[column] < b[column]) 
          result = -1 * direction;
        return result;
      }
    });
  }

}
