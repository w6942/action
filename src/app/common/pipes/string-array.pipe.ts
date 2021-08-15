import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringArray'
})
export class StringArrayPipe implements PipeTransform {

  public transform(value: string, separator: string = ''): Array<string> {
    return value?.trim().split(separator);
  }

}
