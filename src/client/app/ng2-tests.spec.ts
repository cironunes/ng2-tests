import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {Ng2TestsApp} from '../app/ng2-tests';

beforeEachProviders(() => [Ng2TestsApp]);

describe('App: Ng2Tests', () => {
  it('should have the `defaultMeaning` as 42', inject([Ng2TestsApp], (app: Ng2TestsApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([Ng2TestsApp], (app: Ng2TestsApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

