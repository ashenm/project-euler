/**
 * Longest Collatz Sequence
 * Computes the integer bellow one million that produces the longest chain
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

/**
 * @function longest
 * @summary Computes the longest chain
 * @param {Number} ceiling - the starting integer
 * @description Returns the integer yielding longest below ceiling + 1
 */
const longest = function computeLongestChain(ceiling) {

  let longest = 0;

  for (let crest = 0; ceiling !== 0; ceiling--) {

    let stage = cycles(ceiling);

    if (stage < crest) { continue; }

    longest = ceiling;
    crest = stage;

  }

  return longest;

};

/**
 * @function cycles
 * @summary Computes the number of Collatz sequence terms
 * @param {Number} n
 * @description Returns the number of terms of the Collatz sequence chain starting at n
 */
const cycles = function computeChainCount(n) {

  let length = 1;

  // assuming sequence
  // eventually reaches 1
  while (n !== 1) {

    n % 2 !== 0
      ? n = 3 * n + 1
      : n /= 2;

    length += 1;

  }

  return length;

};

// tests
console.assert(cycles(13) === 10, `expected 10 got ${cycles(13)}`);

// answer
console.log(longest(999999));
