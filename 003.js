/**
 * Largest Prime Factor
 * https://projecteuler.net/problem=3
 * Calculate the largest prime factor of the number 600851475143
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

/**
 * @function largestPrimeFactor
 * @summary Calculates largest prime factor
 * @param {Number} number
 * @description Returns the largest prime factor of the parameterised argument
 */
const largestPrimeFactor = function computeLargestPrimeFactor(number) {

  // stage
  let factor;

  // prime factorize
  for (let i = 2; number !== 1; i++) {

    if (number % i !== 0) {
      continue
    }

    if (!isPrime(i)) {
      continue;
    }

    number /= i;
    factor = i;

  }

  // large most prime factor
  return factor;

};

/**
 * @function isPrime
 * @summary Determines whether the parameterised number is a prime
 * @param {Number} number
 * @description Returns true if the parameterised argument is a prime number or false otherwise using Trial Division primality testing
 */
const isPrime = function checkWhetherPrime(number) {

  for (let i = 2, j = Math.sqrt(number); i <= j; i++) {
    if (number % i === 0) { return false; }
  }

  return number > 1;

}

// tests
console.assert(isPrime(3) === true, `expected true got false`);
console.assert(isPrime(2) === true, `expected true got false`);
console.assert(isPrime(1) === false, `expected false got true`);
console.assert(largestPrimeFactor(13195) === 29, `expected 29 got ${largestPrimeFactor(13195)}`);

// answer
console.log(largestPrimeFactor(600851475143));
