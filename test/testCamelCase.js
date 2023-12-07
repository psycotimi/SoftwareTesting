import { expect } from 'chai';
import camelCase from '../src/camelCase.js';

describe('camelCase function', () => {
  it('should convert space-separated words to camel case', () => {
    const result = camelCase('Foo Bar');
    expect(result).to.equal('fooBar');
  });

  it('should handle kebab-case and convert to camel case', () => {
    const result = camelCase('--foo-bar--');
    expect(result).to.equal('fooBar');
  });

  it('should handle snake_case and convert to camel case', () => {
    const result = camelCase('__FOO_BAR__');
    expect(result).to.equal('fooBar');
  });

  it('should handle mixed cases and convert to camel case', () => {
    const result = camelCase('Hello World from_OpenAI');
    expect(result).to.equal('helloWorldFromOpenAI');
  });

  it('should handle empty string and return an empty string', () => {
    const result = camelCase('');
    expect(result).to.equal('');
  });

  it('should handle non-string input and convert to camel case', () => {
    const result = camelCase(123);
    expect(result).to.equal('123');
  });

  it('should handle special characters and convert to camel case', () => {
    const result = camelCase('special__characters--here');
    expect(result).to.equal('specialCharactersHere');
  });
});