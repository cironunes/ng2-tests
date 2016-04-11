import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders,
  fakeAsync,
  tick
} from 'angular2/testing';
import {provide} from 'angular2/core';

import {TaLogin} from './ta-login';

describe('TaLogin Component', () => {
  beforeEachProviders((): any[] => []);

  it('should login', inject([TestComponentBuilder], fakeAsync((tcb:TestComponentBuilder) => {
    let fixture;
    tcb
      // https://github.com/angular/angular/issues/2835
      .overrideTemplate(TaLogin, `
        <form>
          <input type="text" #username>
          <button (click)="loginSubmit(username)">Find user</button>
        </form>
      `)
      .createAsync(TaLogin).then((rootFixture) => {
        fixture = rootFixture;
      });

    tick();

    let componentInstance = fixture.componentInstance;
    let element = fixture.nativeElement;
    let username;

    componentInstance.login.subscribe((value) => {
      username = value;
    });

    element.querySelector('input').value = 'cironunes';
    element.querySelector('button').click();
    tick();
    expect(username).toBe('cironunes');
  })));
});
