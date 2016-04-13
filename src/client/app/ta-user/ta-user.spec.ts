import {
  it,
  describe,
  expect,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {TaUser} from './ta-user';

describe('TaUser Component', () => {
  it('should show the info about the user', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(TaUser).then((fixture) => {
      let componentInstance = fixture.componentInstance;
      let element = fixture.nativeElement;

      componentInstance.user = { name: 'Ciro', age: 18, favoriteColor: 'black' };
      fixture.detectChanges();
      expect(element.querySelector('h1').innerText).toBe('Ciro is 18 and his favorite color is black');
    });
  }));

  it('should show the error message if user does not exist', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(TaUser).then((fixture) => {
      let componentInstance = fixture.componentInstance;
      let element = fixture.nativeElement;

      componentInstance.msg = 'User not found';
      fixture.detectChanges();
      expect(element.querySelector('h2').innerText).toBe('User not found');
    });
  }));
});
