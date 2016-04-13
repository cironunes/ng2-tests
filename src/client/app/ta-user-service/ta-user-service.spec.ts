import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders,
  fakeAsync,
  tick
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {TaUserService} from './ta-user-service';


describe('TaUserService Service', () => {
  beforeEachProviders(() => [TaUserService]);

  describe('#getUser', () => {
    it('should get the user', inject([TaUserService], fakeAsync((service: TaUserService) => {
      let user;
      service.getUser('cironunes').then((value) => {
        user = value;
      });

      tick();
      expect(user.age).toBe(24);
      expect(user.favoriteColor).toBe('black');
    })));

    it('should show the error message if the given user is not found', inject([TaUserService], fakeAsync((service: TaUserService) => {
      let error;
      service.getUser('nonexistent').catch((value) => {
        error = value;
      });

      tick();
      expect(error).toBe('Not found.');
    })));
  });
});
