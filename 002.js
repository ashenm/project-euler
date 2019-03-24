/**
 * Even Fibonacci numbers
 * https://projecteuler.net/problem=2
 * Calculate the sum of all even-valued Fibonacci terms whose values do not exceed four million
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

/**
 * @function sumEvenFibs
 * @summary Sum all even Fibonacci numbers
 * @param {Number} ceiling - the maximum Fibonacci
 * @description Returns the sum of all Fibonacci numbers not greater than parameterised number
 */
const sumEvenFibs = function sumAllEvenFibonacciNumbers(ceiling) {

  let current = 2;
  let previous = 0;
  let subsequent = 8;
  let accumulator = 0;

  while (current <= ceiling) {
    accumulator += current;
    previous = current;
    current = subsequent;
    subsequent = 4 * current + previous;
  }

  return accumulator;

};

// tests
console.assert(sumEvenFibs(0) === 0, `expected 0 got ${sumEvenFibs(0)}`);
console.assert(sumEvenFibs(-2) === 0, `expected 0 got ${sumEvenFibs(-2)}`);
console.assert(sumEvenFibs(20) === 10, `expected 10 got ${sumEvenFibs(20)}`);
console.assert(sumEvenFibs(50) === 44, `expected 44 got ${sumEvenFibs(50)}`);
console.assert(sumEvenFibs(50.50) === 44, `expected 44 got ${sumEvenFibs(50)}`);
console.assert(sumEvenFibs(100) === 44, `expected 44 got ${sumEvenFibs(100)}`);
console.assert(sumEvenFibs(1000) === 798, `expected 798 got ${sumEvenFibs(1000)}`);
console.assert(sumEvenFibs(8000000) === 4613732, `expected 4613733 got ${sumEvenFibs(8000000)}`);

// answer
console.log(sumEvenFibs(4000000));
