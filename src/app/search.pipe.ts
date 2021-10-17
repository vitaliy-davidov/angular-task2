import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(users: any[], value: any) {
    console.log(value);

    return users.filter(user => value == '' ? true : user.name.last.includes(value));
  }
}
