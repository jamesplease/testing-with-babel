import magnitude from '../src/magnitude';
import chai from 'chai';

// I understand that this is a very unpopular pattern, but ES2015 interop
// with CJS is a nuanced topic. For more on this problem,
// including workarounds, see the README for this example.
const mag = magnitude.default;

// A common pattern for large webapps is to set this as a global in a `setup`
// file, but I'm not doing anything fancy to keep the example simple.
const expect = chai.expect;

describe('magnitude', () => {
  describe('when passed in (0, 0)', () => {
    it('should return 0', () => {
      expect(magnitude(0, 0)).to.equal(0);
    });
  });

  describe('when passed in (3, 4)', () => {
    it('should return 5', () => {
      expect(magnitude(3, 4)).to.equal(5);
    });
  });
});
