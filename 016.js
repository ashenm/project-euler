/**
 * Power Digit Sum
 * Computes the sum of the digits of the number 2 ^ 100
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

/**
 * @function sum
 * @summary Computes the sum of the digits
 * @param {Number} value
 * @description Returns the sum of the digits of the parameterised value
 */
const sum = function computeSumOfDigits(value) {
  return BigInt(value).toString().split('').reduce((accumulator, value, index, values) => accumulator + +value, 0);
};

// tests
console.assert(sum(2 ** 15) === 26, `expected 26 got ${sum(2 ** 15)}`);

// answer
console.log(sum(2 ** 1000));
