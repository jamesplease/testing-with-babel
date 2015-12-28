// A utility method that computes the magnitude of the vector (which is
// just the Pythagorean theorem).
// This is a separate file to make these examples slightly more complex than
// having a single file.
export default function(x, y) {
  // We can't use `x ** 2` because the exponentiation operator
  // is not included in the ES2015 preset as of Dec. 15, 2015
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}
