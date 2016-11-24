/* We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.
 * What is the largest n-digit pandigital prime that exists?*/

var prime = require('../util/prime');
var util = require('../util/util');

prime.isPrime(1000000000);

for (var i = 1000000000; true; i--) {
  if (prime.isPrime(i) && util.isPandigital(i.toString())) {
    console.log(i);
    return;
  }
}
