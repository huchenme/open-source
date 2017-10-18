import { expect } from 'chai';
import { allNames, random } from './index';

describe('starwars-names-open-source', () => {
  describe('allNames', () => {
    it('should return an array of strings', () => {
      const isArrayOfStrings = array =>
        array.every(item => typeof item === 'string');

      expect(allNames).to.satisfy(isArrayOfStrings);
    });

    it('should contains `Skywalker`', () => {
      expect(allNames).to.include('Skywalker');
    });
  });

  describe('random', () => {
    it('should return a random item from the starWarsNames.allNames', () => {
      const randomItem = random();
      expect(allNames).to.include(randomItem);
    });

    it('should return an array of random items if passed a number', () => {
      const randomItems = random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(item => {
        expect(allNames).to.include(item);
      });
    });
  });
});
