import * as chai from 'chai';

describe('some tests', () => {
  it('should pass', () => {
    chai.expect(true).to.be.equal(true);
  });
  it('should fail', () => {
    chai.expect(true).to.be.equal(false);
  });
});