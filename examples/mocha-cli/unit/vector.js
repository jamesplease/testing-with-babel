import Vector from '../src/index';
import chai from 'chai';

// A common pattern for large webapps is to set this as a global in a `setup`
// file, but I'm not doing anything fancy to keep the example simple.
const expect = chai.expect;

describe('Vector', () => {
  it('should be a function', () => {
    expect(Vector).to.be.a('function');
  });
});
