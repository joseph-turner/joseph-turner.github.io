import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomItem'
})
export class RandomItemPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      console.log(typeof value);
      const randomIdx = Math.floor(Math.random() * value.length);
      return value[randomIdx];
    }
  }

}
