import {Injectable} from 'angular2/core';

const users = [
  { name: 'cironunes', age: 24, favoriteColor: 'black' },
  { name: 'sami', age: 22, favoriteColor: 'red' },
  { name: 'guibarbosa', age: 27, favoriteColor: 'blue' }
];

@Injectable()
export class TaUserService {

  getUser(username: string) {
    return new Promise((resolve, reject) => {
      let user = users.filter(u => u.name === username);

      if (user.length) {
        resolve(user[0]);
      } else {
        reject('Not found.');
      }
    });
  }
}
