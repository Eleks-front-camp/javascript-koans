import {expect} from 'chai';

import {functions} from '../index';

describe('functions.js', () => {
  describe('add(num1)(num2) method - should add numbers, but numbers sould be passed as single argument every time', () => {
    it('should return sum of two numbers', () => {
      const res = functions.add(2)(5);
      expect(res).to.be.equal(7);
    });
    it('should return sum of five numbers', () => {
      const res = functions.add(2)(5)(1)(3);
      expect(res).to.be.equal(10);
    });
  })


});

