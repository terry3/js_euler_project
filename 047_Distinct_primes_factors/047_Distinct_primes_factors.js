/* The first two consecutive numbers to have two distinct prime factors are:
 * 14 = 2 × 7
 * 15 = 3 × 5
 * The first three consecutive numbers to have three distinct prime factors are:
 * 644 = 2² × 7 × 23
 * 645 = 3 × 5 × 43
 * 646 = 2 × 17 × 19.
 * Find the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?*/

const prime = require('../util/prime');
const _ = require('lodash');
/* load the prime less than 1000 */
prime.isPrime(Math.pow(100000, 2));

var is4PrimeFactors = function(n) {
  var ret = 0;
  var i = 0;
  var maxFactors = 4;
  var reta = [];
  var nbak = n;
  while (true) {
    if (nbak === 1) {
      var length = _.uniq(reta).length;
      if (length === maxFactors) {
        return true;
      } else {
        return false;
      }
    }
    if (nbak % prime.primes[i] === 0) {
      reta.push(prime.primes[i]);
      nbak = nbak / prime.primes[i];
      i = -1;
    }
    i++;
  }
};

var i = 1000;
var sum = 0;
var consecutive = false;
while (true) {
  if (is4PrimeFactors(i)) {
    if (consecutive) {
      sum++;
    }
    if (!consecutive) {
      sum = 1;
    }
    consecutive = true
  } else {
    if (consecutive) {
      if (sum === 4) {
        console.log(i - 4);
        break;
      } else {
        sum = 0;
        consecutive = false;
      }
    }
  }
  i++;
}
