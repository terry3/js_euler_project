/* The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.
 * There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.
 * How many circular primes are there below one million?*/

const prime = require('../util/prime');

function rotate(n) {
  var bak = n;
  var tmp;
  var rotateSub = function(s) {
    var ns = s.toString();
    return parseInt(ns[ns.length - 1] + ns.slice(0, ns.length -1))
  };
  if (prime.isPrime(n)) {
    while (true) {
      n = rotateSub(n);
      if(prime.isPrime(n) && n == bak) {
        return true
      } else if (prime.isPrime(n)) {
        continue;
      } else {
        return false;
      }
    }
  }
}

function findSuchNumber() {
  var i = 2;
  var ret = []
  while(i < 1000000) {
    if(rotate(i)) {
      ret.push(i)
    }
    i++;
  }
  return ret.length;
}


console.log(findSuchNumber());
