import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'ta-login',
  templateUrl: 'app//ta-login/ta-login.html',
  styleUrls: ['app//ta-login/ta-login.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class TaLogin {
  @Output() login = new EventEmitter();

  loginSubmit(username) {
    this.login.emit(username.value);
    username.value = '';
  }
}
