const { expect } = require('chai');
const fizzBuzzService = require('../../src/services/fizzbuzz');

describe('fizzBuzz service', () => {
  it('should return 15 items with fizz buzz and fizzbuzz', () => {
    const length = 15;
    const result = fizzBuzzService.createList(length);

    expect(result).to.have.length(length);
    expect(result).to.deep.equal([
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz',
    ])
  });
});
