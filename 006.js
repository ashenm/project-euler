/**
 * Sum Square Difference
 * https://projecteuler.net/problem=6
 * Computes the difference between the sum of the squares and the square of the sum
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

/**
 * @function diff
 * @summary Computes the difference between the sum of the squares and the square of the sum
 * @param {Number} ceil - the maximum (inclusive)
 * @description Returns the difference between the sum of the squares and the square of the sum up to parameterised ceiling
 */
const diff = function computeDifference(ceil) {

  // sum of squares
  let squares = 0;

  // sum of natural number
  // up to specified ceiling
  const sum = ceil * (ceil + 1) / 2;

  // compute sum of natural number
  // squares up to specified ceiling
  for (let i = 1; i <= ceil; i++) {
    squares += i * i;
  }

  // difference
  return sum * sum - squares;

};

// tests
console.assert(diff(10) === 2640, `expected 2640 got ${diff(10)}`);

// answer
console.log(diff(100));
