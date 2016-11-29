/* The prime 41, can be written as the sum of six consecutive primes:
 * 41 = 2 + 3 + 5 + 7 + 11 + 13
 * This is the longest sum of consecutive primes that adds to a prime below one-hundred.
 * The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.
 * Which prime, below one-million, can be written as the sum of the most consecutive primes?*/

const prime = require('../util/prime');

const maxLength = function() {
  var sum = 0;
  var i = 1;
  while (sum < 1000000) {
    sum += prime.calculateNthPrime(i);
    i++;
  }
  return i;
}();

var reduceRange = function(begin, end) {
  return function(p, c, index) {
    if (index >= begin && index < end) {
      return p + c;
    } else {
      return p;
    }
  }
}

console.log(maxLength);

for (var i = maxLength;i > 0;i--) {
  var j = 0;
  while (j + i <= maxLength) {
    var ret = prime.primes.reduce(reduceRange(j, j + i), 0);
    if (prime.isPrime(ret)
        && ret < 1000000) {
      console.log(ret);
      return;
    }
    j++;
  }
}

