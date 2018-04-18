import * as chai from 'chai';

import {sum} from '../index';

describe('should add two numbers', () => {
  it('should return sum if two numbers was passed', () => {
    chai.expect(sum(2,2)).to.be.equal(4);
  });
});