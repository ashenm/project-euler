/**
 * Highly Divisible Triangular Number
 * Computes the first triangle number to have over five hundred divisors
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

/**
 * @function triangle
 * @summary Computes the first triangle number with over n divisors
 * @param {Number} n
 * @description Returns the first triangle number with over n divisors
 */
const triangle = function computeTriangleWithDivisors(n) {

  let triangular;

  for (let factors = 1, index = 2; factors <= n; index++) {
    factors = divisors(triangular = index * (index + 1) / 2);
  }

  return triangular;

};

/**
 * @function devisors
 * @summary Computes the number of divisors
 * @param {Number} number
 * @description Returns the number of divisors of the parameterised integer
 */
const divisors = function computeNumberOfDivisors(number) {

  let counter = 1;
  let divisor = 2;
  let exponent = 0;

  while (number !== 1) {

    if (number % divisor !== 0) {
      counter *= exponent + 1;
      divisor = next(divisor);
      exponent = 0;
      continue;
    }

    number /= divisor;
    exponent += 1;

  }

  return counter *= exponent + 1;

};

/**
 * @function next
 * @summary Computes the next prime
 * @param {Number} current
 * @description Returns the prime number followed by the parameterised integer
 */
const next = function computeNextPrime(current) {

  let next = current + 1;

  for (let divisor = 2, ceiling = Math.sqrt(next); divisor <= ceiling;) {

    if (next % divisor !== 0) {
      divisor++;
      continue;
    }

    ceiling = Math.sqrt(next += 1);
    divisor = 2;

  }

  return next;

};

// tests
console.assert(triangle(1) === 3, `expected 3 got ${triangle(1)}`);
console.assert(triangle(3) === 6, `expected 6 got ${triangle(3)}`);
console.assert(triangle(5) === 28, `expected 28 got ${triangle(5)}`);

// answer
console.log(triangle(500));
