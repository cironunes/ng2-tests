import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {CliRouteConfig} from './route-config';

import {TaUser} from './ta-user/ta-user';
import {TaUserService} from './ta-user-service/ta-user-service';

@Component({
  selector: 'ng2-tests-app',
  providers: [ROUTER_PROVIDERS, TaUserService],
  templateUrl: 'app/ng2-tests.html',
  directives: [ROUTER_DIRECTIVES, TaUser],
  pipes: []
})
@RouteConfig([

].concat(CliRouteConfig))

export class Ng2TestsApp {
  user;
  msg: string;

  constructor(public userService:TaUserService) {}

  findUser(username) {
    this.userService.getUser(username.value).then((user) => {
      this.user = user;
      this.msg = '';
    }).catch((error) => {
      this.user = null;
      this.msg = error;
    });
  }
}
