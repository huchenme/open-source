import { expect } from 'chai';
import { all, random } from './index';

describe('starwars-names-open-source', () => {
  describe('all', () => {
    it('should return an array of strings', () => {
      const isArrayOfStrings = array =>
        array.every(item => typeof item === 'string');

      expect(all).to.satisfy(isArrayOfStrings);
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

    it('should return an array of random items if passed a number', () => {
      const randomItems = random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(item => {
        expect(all).to.include(item);
      });
    });
  });
});
