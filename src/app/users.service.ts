import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators/';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http
      .get(
        'https://randomuser.me/api/?inc=gender,name,picture,location&results=10&nat=gb'
      )
      .pipe(map((response: any) => response['results']))
      .pipe(
        map((users) => {
          return users.map((u: any) => {
            return {
              name: u.name.first + ' ' + u.name.last,
              image: u.picture.large,
              geo: u.location.city + ' ' + u.location.state,
            };
          });
        })
      );
  }
}
