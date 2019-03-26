/**
 * 10001st Prime
 * https://projecteuler.net/problem=7
 * Computes the 10001st prime
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

/**
 * @function nprime
 * @summary Computes n-th prime
 * @param {Number} n
 * @description Returns the nth prime
 */
const nprime = function computeNthPrime(n) {

  let prime = 2;

  for (let index = 1; index < n; index++) {

    let adjacent = prime + 1;
    let ceil = Math.sqrt(adjacent);

    for (let divisor = 2; divisor <= ceil; divisor++) {

      if (adjacent % divisor !== 0) {
        continue;
      }

      ceil = Math.sqrt(adjacent += 1);
      divisor = 1;

    }

    prime = adjacent;

  }

  return prime;

};

// tests
console.assert(nprime(1) === 2, `expected 2 got ${nprime(1)}`);
console.assert(nprime(6) === 13, `expected 13 got ${nprime(6)}`);
console.assert(nprime(327) === 2179, `expected 2179 got ${nprime(327)}`);

// answer
console.log(nprime(10001));
