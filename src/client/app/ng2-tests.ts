import {Component} from 'angular2/core';

import {TaUser} from './ta-user/ta-user';
import {TaLogin} from './ta-login/ta-login';
import {IUser, TaUserService} from './ta-user-service/ta-user-service';

@Component({
  selector: 'ng2-tests-app', providers: [TaUserService],
  templateUrl: 'app/ng2-tests.html',
  directives: [TaUser, TaLogin],
  pipes: []
})

export class Ng2TestsApp {
  user;
  msg: string;

  constructor(public userService:TaUserService) {}

  findUser(username) {
    this.userService.getUser(username)
      .then((user) => {
        this.user = user;
        this.msg = '';
      })
      .catch((error) => {
        this.msg = error;
        this.user = null;
      });
  }
}
