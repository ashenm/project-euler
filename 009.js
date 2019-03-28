/**
 * Special Pythagorean Triplet
 * Computes the product of Pythagorean triplet yielding sum 1000
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

/**
 * @function triplet
 * @summary Computes the product of a Pythagorean triplet yielding sum n
 * @param {Number} n - the sum of the Pythagorean triplet
 * @description Returns the product of a Pythagorean triplet yielding the parameterised sum n
 */
const triplet = function computeProductOfPythagoreanSum(n) {

  const ceil = n / 2;

  for (let a = 1, b = 1; a <= ceil;) {

    let c = Math.sqrt(a * a + b * b);

    if (a + b + c === n) { return a * b * c; }

    if ((b += 1) > ceil) { a += 1; b = 1; }

  }

  return -1;

};

// tests
console.assert(triplet(12) === 60, `expected 60 got ${triplet(12)}`);

// answer
console.log(triplet(1000));
