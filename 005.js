/**
 * Smallest Multiple
 * https://projecteuler.net/problem=5
 * Computes the LCM for a integer range
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

/**
 * @function rlcm
 * @summary Computes the LCM for a integer range
 * @param {Number} start - The starting value
 * @param {Number} end - The ending value (inclusive)
 * @description
 */
const rlcm = function computeLeastCommonMultiple(start, end) {

  let lcm = start;

  while (start !== end) {
    lcm = lcm * (start += 1) / gcd(lcm, start);
  }

  return lcm;

};

/**
 * @function gcd
 * @summary Computes the GCD of two integers
 * @param {Number} x
 * @param {Number} y
 * @description Computes GCD of two intergers using Euclid's algorithm
 */
const gcd = function computeGreatestCommonDivisor(x = 1, y = 1) {

  while (y !== 0) {
    [ x, y ] = [ y, x % y ];
  }

  return x;

};

// tests
console.assert(gcd(2, 3) === 1, `expected 1 got ${gcd(2, 3)}`);
console.assert(gcd(48, 18) === 6, `expected 6 got ${gcd(48, 18)}`);
console.assert(rlcm(1, 10) === 2520, `expected 2520 got ${rlcm(1, 10)}`);

// answer
console.log(rlcm(1, 20));
