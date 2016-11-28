/* The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways: (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are permutations of one another.
 * There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, but there is one other 4-digit increasing sequence.
 * What 12-digit number do you form by concatenating the three terms in this sequence?*/

var isPermutation = function() {
  var args = arguments;
  if (args.length === 0
      || args.length === 1) {
    return false;
  }
  var first = args[0];
  for (var i = 1;i < args.length;i++) {
    if (args[i].length === first.length) {
      var tmpStr = args[i];
      if (!Array.prototype.map.call(first, function(c) {
        if (!!~tmpStr.indexOf(c)) {
          tmpStr = tmpStr.slice(0, tmpStr.indexOf(c))
                 + tmpStr.slice(tmpStr.indexOf(c) + 1);
          return true;
        }
        return false;
      }).every(function(item) {
        return item;
      })) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

const prime = require('../util/prime');
var position = -1;
/* generate primes less that 10000 */
prime.isPrime(20000 * 20000);
while(prime.primes[++position] < 1000);
console.log(prime.primes.length, prime.primes[prime.primes.length - 1]);
console.log(isPermutation('1487', '4817', '8147'));

for (var i = position; prime.primes[i] < 10000;i++) {
  for (var j = i + 1;prime.primes[j] < 10000;j++) {
    var next = prime.primes[j] + (prime.primes[j] - prime.primes[i]);
    if (prime.isPrime(next)) {
      if (isPermutation.apply(null, [i, j].map(function(item) {
        return (prime.primes[item]).toString();
      }).concat([next.toString()]))) {
        console.log(prime.primes[i], prime.primes[j], next);
      }
    }
  }
}
