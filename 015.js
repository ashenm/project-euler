/**
 * Lattice Paths
 * Computes the lattice path combinations for a grid of 20x20
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

/**
 * @function lattice
 * @summary Computes the number of lattice path combinations
 * @param {Number} size
 * @description Returns the number of lattice path combinations for a grid of size x size
 */
const lattice = function computeLatticeCombinations(size) {
  return Math.floor(factorial(size + size) / factorial(size) ** 2);
};

/**
 * @function factorial
 * @summary Compute n!
 * @param {Number} n
 * @description Returns the factorial of integer n
 */
const factorial = function computeFactorial(n, accumulator = 1) {
  return n === 0 ? accumulator : factorial(n - 1, n * accumulator);
};

// tests
console.assert(factorial(7) === 5040, `expected 5040 got ${factorial(7)}`);
console.assert(lattice(2) === 6, `expected 6 got ${lattice(2)}`);

// answer
console.log(lattice(20));
