import { expect } from 'chai';
import capitalize from '../src/capitalize.js';

describe('capitalize function', () => {
  it('should capitalize the first character of a string', () => {
    const result = capitalize('hello');
    expect(result).to.equal('Hello');
  });

  it('should handle an empty string and return an empty string', () => {
    const result = capitalize('');
    expect(result).to.equal('');
  });

  it('should capitalize the first character and convert the rest to lower case', () => {
    const result = capitalize('WORLD');
    expect(result).to.equal('World');
  });

  it('should handle a string with all uppercase characters and capitalize the first character', () => {
    const result = capitalize('FOO BAR');
    expect(result).to.equal('Foo bar');
  });

  it('should handle a string with all lowercase characters and capitalize the first character', () => {
    const result = capitalize('quixote');
    expect(result).to.equal('Quixote');
  });

  it('should handle a string with a single character and capitalize it', () => {
    const result = capitalize('a');
    expect(result).to.equal('A');
  });

  it('should handle a non-string input and convert it to a string and capitalize the first character', () => {
    const result = capitalize(123);
    expect(result).to.equal('123');
  });

  it('should handle a string with leading and trailing whitespace and capitalize the first character', () => {
    const result = capitalize('   example   ');
    expect(result).to.equal('   example   ');
  });
});
