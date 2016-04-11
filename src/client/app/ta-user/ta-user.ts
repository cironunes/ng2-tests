import {Component, Input} from 'angular2/core';

@Component({
  selector: 'ta-user',
  templateUrl: 'app//ta-user/ta-user.html',
  styleUrls: ['app//ta-user/ta-user.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class TaUser {
  @Input() user;
  @Input() msg;
}
