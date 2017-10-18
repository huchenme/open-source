import uniqueRandomArray from 'unique-random-array';
import starWarsNames from './starwars-names.json';

const getRandomItem = uniqueRandomArray(starWarsNames);

const random = number => {
  const randomItems = [];
  if (number === undefined) {
    return getRandomItem();
  }

  for (let i = 0; i < number; i += 1) {
    randomItems.push(getRandomItem());
  }
  return randomItems;
};

export { starWarsNames as all, random };
