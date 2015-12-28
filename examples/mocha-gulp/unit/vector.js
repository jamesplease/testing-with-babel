import Vector from '../src/index';
import chai from 'chai';

// A common pattern for large webapps is to set this as a global in a `setup`
// file, but I'm not doing anything fancy to keep the example simple.
const expect = chai.expect;

describe('Vector', () => {
  it('should be a function', () => {
    expect(Vector).to.be.a('function');
  });

  describe('creating a vector, then querying for its values', () => {
    it('should return the values that you passed in', () => {
      var vector = new Vector(2, 3);
      expect(vector.x).to.equal(2);
      expect(vector.y).to.equal(3);
    });
  });
});
