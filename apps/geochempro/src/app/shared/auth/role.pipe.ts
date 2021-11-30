import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hasRole',
})
export class HasRolePipe implements PipeTransform {
  transform(value: string[], args: string[]): boolean {
    return args.some((arg) => arg === '*' || value.includes(arg));
  }
}
