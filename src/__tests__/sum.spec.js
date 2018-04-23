import {expect} from 'chai';

import {sum} from '../index';

describe('sum.js - should add two numbers', () => {
  it('should return sum if two numbers was passed', () => {
    expect(sum(2,2)).to.be.equal(4);
  });
});