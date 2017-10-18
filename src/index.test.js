import { expect } from 'chai';
import { all, random } from './index';

describe('starwars-names-open-source', () => {
  describe('all', () => {
    it('should return an array of strings', () => {
      expect(all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contains `Skywalker`', () => {
      expect(all).to.include('Skywalker');
    });
  });

  describe('random', () => {
    it('should return a random item from the starWarsNames.all', () => {
      const randomItem = random();
      expect(all).to.include(randomItem);
    });
  });
});
