/* It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.
 * 9 = 7 + 2×12
 * 15 = 7 + 2×22
 * 21 = 3 + 2×32
 * 25 = 7 + 2×32
 * 27 = 19 + 2×22
 * 33 = 31 + 2×12
 * It turns out that the conjecture was false.
 * What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?*/

const prime = require('../util/prime');

var isConjecture = function(n) {
  var i = 0;
  prime.isPrime(n * n);
  while (prime.primes[i] < n) {
    if (Number.isInteger(Math.sqrt((n - prime.primes[i]) / 2))) {
      return true;
    }
    i++;
  }
  return false;
}

var i = 1;
while(true) {
  i += 2;
  if (!prime.isPrime(i)
      && !isConjecture(i)) {
    console.log(i);
    return;
  }
}
