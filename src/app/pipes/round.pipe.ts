import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round',
  standalone: false
})
export class RoundPipe implements PipeTransform {

  transform(value: number, digits: number = 1): number | null {
    if (value === null || value === undefined) return null;
    const factor = Math.pow(10, digits);
    return Math.round(value * factor) / factor;
  }

}
