import magnitude from './magnitude';

// This is the Class that we're testing. It's nothing serious; just a small
// class representing a mathematical object called a vector.
export default class Vector {
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  set x(value) {
    if (typeof value !== 'number') {
      throw new Error('"x" must be a number.');
    }

    this._x = value;
  }

  set y(value) {
    if (typeof value !== 'number') {
      throw new Error('"y" must be a number.');
    }

    this._y = value;
  }

  // Returns the magnitude of the vector using the `magnitude` util method
  get magnitude() {
    return magnitude(this._x, this._y);
  }
}
