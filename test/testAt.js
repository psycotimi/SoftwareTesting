import { expect } from 'chai';
import at from '../src/at.js';

describe('at function', () => {
  it('should pick values from the object based on specified paths', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    const result = at(object, ['a[0].b.c', 'a[1]']);
    expect(result).to.deep.equal([3, 4]);
  });

  it('should handle non-existing paths and return an array of undefined values', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    const result = at(object, ['a[0].x.y', 'a[2]']);
    expect(result).to.deep.equal([undefined, undefined]);
  });

  it('should handle empty paths and return an empty array', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    const result = at(object);
    expect(result).to.deep.equal([]);
  });

  it('should handle paths with array indices and return corresponding values', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    const result = at(object, ['a[0].b.c', 'a[0]', 'a[1]']);
    expect(result).to.deep.equal([3, { 'b': { 'c': 3 } }, 4]);
  });

  it('should handle paths with nested arrays and return corresponding values', () => {
    const object = { 'a': [{ 'b': { 'c': [1, 2, 3] } }, 4] };
    const result = at(object, ['a[0].b.c[0]', 'a[0].b.c[2]', 'a[1]']);
    expect(result).to.deep.equal([1, 3, 4]);
  });
});
