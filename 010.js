/**
 * Summation of Primes
 * Computes the sum of all primes below two million
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

/**
 * @function sum
 * @summary Computes the sum of all primes below n
 * @param {Number} n
 * @description Returns the sum of all primes below the parameterised ceiling n
 */
const sum = function computeSumOfPrimes(n) {

  let ceil = 1;
  let accumulator = 0;

  for (let index = 2, divisor = 3; index < n;) {

    if (index % divisor === 0) {
      ceil = Math.sqrt(index += 1);
      divisor = 2;
      continue;
    }

    if ((divisor += 1) > ceil) {
      accumulator += index;
      ceil = Math.sqrt(index += 1);
      divisor = 2;
    }

  }

  return accumulator;

};

// tests
console.assert(sum(10) === 17, `expected 17 got ${sum(10)}`);

// answer
console.log(sum(2000000));
