/**
 * Multiples of 3 and 5 
 * https://projecteuler.net/problem=1
 * Calculate the sum of all the multiples of 3 or 5 below 1000
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

/**
 * @function sumMultiples
 * @summary Sum all multiples of three or five
 * @param {Number} ceiling - The maximum number before which sequence ends
 * @param {Number} [floor=1] - The minimum number which to begin sequence
 * @description Returns the sum of all multiples of three or five stating and ending at parameterised arguments
 */
const sumMultiples = function sumAllMultiplesOfThreeOrFive(ceiling, floor=1) {

  let accumulator = 0;

  // only integers
  const CEILING = Math.floor(ceiling);
  const FLOOR = Math.floor(floor);

  // TODO use geometric progression instead
  // since computation is expensive with large numbers
  for (let value = FLOOR; value < CEILING; value++)
    if (value % 3 === 0 || value % 5 === 0)
      accumulator += value;

  return accumulator;

};

// tests
console.assert(sumMultiples(-10) === 0, `expected 0 got ${sumMultiples(-10)}`);
console.assert(sumMultiples(0) === 0, `expected 0 got ${sumMultiples(0)}`);
console.assert(sumMultiples(50) === 543, `expected 543 got ${sumMultiples(50)}`);
console.assert(sumMultiples(50.50) === 543, `expected 543 got ${sumMultiples(50.50)}`);
console.assert(sumMultiples(5000000) === 5833329166668, `expected 5833329166668 got ${sumMultiples(5000000)}`);

// answer
console.log(sumMultiples(1000));
