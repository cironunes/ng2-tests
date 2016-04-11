import {Injectable} from 'angular2/core';

export interface IUser {
  name: string;
  age: number;
  favoriteColor: string;
}

export class User implements IUser {
  name: string;
  age: number;
  favoriteColor: string;

  constructor(options: { name: string, age: number, favoriteColor: string }) {
    this.name = options.name;
    this.age = options.age;
    this.favoriteColor = options.favoriteColor;
  }
}

const users: IUser[] = [
  new User({ name: 'cironunes', age: 24, favoriteColor: 'black' }),
  new User({ name: 'sami', age: 22, favoriteColor: 'red' }),
  new User({ name: 'guibarbosa', age: 27, favoriteColor: 'blue' })
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
