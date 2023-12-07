import { expect } from 'chai';
import toNumber from '../src/toNumber.js';

describe('toNumber function', () => {
  it('should convert a positive integer string to a number', () => {
    const result = toNumber('42');
    expect(result).to.equal(42);
  });

  it('should convert a negative integer string to a number', () => {
    const result = toNumber('-123');
    expect(result).to.equal(-123);
  });

  it('should convert a positive floating-point string to a number', () => {
    const result = toNumber('3.14');
    expect(result).to.equal(3.14);
  });

  it('should convert a negative floating-point string to a number', () => {
    const result = toNumber('-0.25');
    expect(result).to.equal(-0.25);
  });

  it('should convert a string in scientific notation to a number', () => {
    const result = toNumber('6.022e23');
    expect(result).to.equal(6.022e23);
  });

  it('should convert a boolean to a number', () => {
    const result = toNumber(true);
    expect(result).to.equal(1);
  });

  it('should convert NaN to NaN', () => {
    const result = toNumber(NaN);
    expect(result).to.be.NaN;
  });

  it('should convert Infinity to Infinity', () => {
    const result = toNumber(Infinity);
    expect(result).to.equal(Infinity);
  });

  it('should convert a symbol to NaN', () => {
    const result = toNumber(Symbol('test'));
    expect(result).to.be.NaN;
  });

  it('should convert an object with valueOf method to its value', () => {
    const obj = {
      valueOf: () => 42,
    };
    const result = toNumber(obj);
    expect(result).to.equal(42);
  });

  it('should convert an object without valueOf method to its string representation', () => {
    const obj = {
      toString: () => '123',
    };
    const result = toNumber(obj);
    expect(result).to.equal(123);
  });

  it('should return 0 for an empty string', () => {
    const result = toNumber('');
    expect(result).to.equal(0);
  });

  it('should return NaN for a non-numeric string', () => {
    const result = toNumber('abc');
    expect(result).to.equal(NaN);
  });
});
