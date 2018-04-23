import {expect} from 'chai';

import {strings} from '../index';

describe('strings.js', () => {
  describe('repeat(string,n) method - return string N times', () => {
    it('should return original string n times', () => {
      expect(strings.repeat('test', 4)).to.be.equal('testtesttesttest');
    });
    it('should transform number to string and return n times as string', () => {
      expect(strings.repeat(42, 3)).to.be.equal('424242');
    });
  });

  describe('ucFirst(string) method - return capitalized string', () => {
    it('should return original string but with first letter in uppercase', () => {
      expect(strings.ucFirst('test')).to.be.equal('Test');
    });
    it('should return empty on input when original string ""', () => {
      expect(strings.ucFirst('')).to.be.equal('');
    });
  });

  describe('truncate(string, maxLength, replaceText) method' +
    ' - if string longer than `maxLength`, cut it, and replace end with replacementText("..." by default)', () => {
    const originalString = 'some once told me the word is gonna roll me';
    it('should return same string as passed if maxLength equal length of original string', () => {
      expect(strings.truncate(originalString, originalString.length)).to.be.equal(originalString);
    });
    it('should return cut string with length equal maxLength and "..." in the end', () => {
      expect(strings.truncate(originalString, 9)).to.be.equal('some o...');
    });
    it('should return cut string with length equal maxLength and replacementText value in the end', () => {
      expect(strings.truncate(originalString, 9, '@')).to.be.equal('some onc@');
    });
  })
});