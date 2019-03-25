/**
 * Largest Palindrome Product
 * https://projecteuler.net/problem=4
 * Computes largest palindrome made from the product of two 3-digit numbers
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

/**
 * @function palindrome
 * @summary Computes largest palindrome
 * @args {Number} digits - The number of digit per multiplier
 * @description Returns the largest palindrome composed from two numbers of parameterized digits
 */
const palindrome = function computeLargestPalindrome(digits = 1) {

  let m, x, y;
  let ceil = '9'.repeat(digits);
  let boundary = +'9'.padEnd(digits, '0');

  const floor = +ceil.slice(1);

  x = y = +ceil;

  while (x !== floor) {

    m = String(x * y);

    if (m.split('').reverse().join('') === m) {
      return +m;
    }

    if ((y -= 1) === boundary) {
      x -= 1;
      y = ceil;
    }

    if (x === boundary) {
      ceil = boundary;
      boundary -= 100;
    }

  }

  return -1;

};

// tests
console.assert(palindrome(2) === 9009, `expected 9009 got ${palindrome(2)}`);

// answer
console.log(palindrome(3));
