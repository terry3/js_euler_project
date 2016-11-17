/* The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.
 * Find the sum of the only eleven primes that are both truncatable from left to right and right to left.
 * NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.*/

const prime = require('../util/prime');

function truncateStr(str) {
  var i = 1;
  var length = str.length;
  while (i < length) {
    /* console.log(str.substring(0, i))*/
    if (!prime.isPrime(parseInt(str.substring(0, i)))) {
      return false;
    }
    i++;
  }
  i = 1;
  while (i < length) {
    /* console.log(str.substring(i, length))*/
    if (!prime.isPrime(parseInt(str.substring(i, length)))) {
      return false;
    }
    i++;
  }
  return true;
}

function findTruncatablePrimes() {
  var sum = 0;
  var i = 10;
  var count = 11;
  while (count) {
    if (prime.isPrime(i) && truncateStr(i.toString())) {
      sum += i;
      count--;
    }
    i++;
  }
  return sum
}

console.log(findTruncatablePrimes());
/* console.log(truncateStr('13733333'));*/
