import { expect } from 'chai';
import filter from '../src/filter.js';

describe('filter function', () => {
  it('should filter elements based on the predicate', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred',   'active': false },
      { 'user': 'alice',  'active': true }
    ];

    const result = filter(users, ({ active }) => active);

    expect(result).to.deep.equal([
      { 'user': 'barney', 'active': true },
      { 'user': 'alice',  'active': true }
    ]);
  });

  it('should handle an empty array and return an empty array', () => {
    const result = filter([], item => item);
    expect(result).to.deep.equal([]);
  });

  it('should handle a predicate that always returns true and return the original array', () => {
    const array = [1, 2, 3, 4, 5];
    const result = filter(array, () => true);
    expect(result).to.deep.equal(array);
  });

  it('should handle a predicate that always returns false and return an empty array', () => {
    const array = [1, 2, 3, 4, 5];
    const result = filter(array, () => false);
    expect(result).to.deep.equal([]);
  });

  it('should handle a predicate that filters odd numbers', () => {
    const array = [1, 2, 3, 4, 5];
    const result = filter(array, item => item % 2 === 0);
    expect(result).to.deep.equal([2, 4]);
  });

  it('should handle a predicate that filters strings with length greater than 3', () => {
    const array = ['apple', 'banana', 'kiwi', 'grape'];
    const result = filter(array, item => item.length > 3);
    expect(result).to.deep.equal(['apple', 'banana', 'grape']);
  });
});
