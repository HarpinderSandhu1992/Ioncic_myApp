import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groceries',
  standalone: true
})
export class GroceriesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
