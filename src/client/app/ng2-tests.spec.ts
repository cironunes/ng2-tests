import {
  describe,
  it,
  expect,
  beforeEachProviders,
  inject,
  fakeAsync,
  tick
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {Ng2TestsApp} from '../app/ng2-tests';
import {TaUserService, User} from '../app/ta-user-service/ta-user-service';

class MockUserService implements TaUserService {
  getUser(username) {
    return new Promise((resolve, reject) => {
      resolve(new User({
        name: 'Ciro', age: 24, favoriteColor: 'black'
      }));
    });
  }
}

class MockErrorUserService implements TaUserService {
  getUser(username) {
    return new Promise((resolve, reject) => {
      reject('User not found');
    });
  }
}

describe('App: Ng2Tests', () => {
  describe('#finduser happy scenario', () => {
    beforeEachProviders(() => [
      Ng2TestsApp,
      provide(TaUserService, { useClass: MockUserService })
    ]);

    it('should set the user', inject([Ng2TestsApp], fakeAsync((app: Ng2TestsApp) => {
      app.findUser('Ciro');
      tick();

      expect(app.user.age).toBe(24);
      expect(app.user.favoriteColor).toBe('black');
      expect(app.msg).toBe('');
    })));
  });

  describe('#finduser unhappy scenario', () => {
    beforeEachProviders(() => [
      Ng2TestsApp,
      provide(TaUserService, { useClass: MockErrorUserService })
    ]);

    it('should set the user', inject([Ng2TestsApp], fakeAsync((app: Ng2TestsApp) => {
      app.findUser('nonexistent');
      tick();

      expect(app.user).toBe(null);
      expect(app.msg).toBe('User not found');
    })));
  });
});

