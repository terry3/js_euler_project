/*
 Euler discovered the remarkable quadratic formula:
n² + n + 41
It turns out that the formula will produce 40 primes for the consecutive
 values n = 0 to 39. However, when n = 40, 402 + 40 + 41 = 40(40 + 1) + 41 is
 divisible by 41, and certainly when n = 41, 41² + 41 + 41 is clearly
 divisible by 41.

The incredible formula  n² − 79n + 1601 was discovered, which produces 80
 primes for the consecutive values n = 0 to 79. The product of the
 coefficients, −79 and 1601, is −126479.

Considering quadratics of the form:

n² + an + b, where |a| < 1000 and |b| < 1000

where |n| is the modulus/absolute value of n
e.g. |11| = 11 and |−4| = 4
Find the product of the coefficients, a and b, for the quadratic expression
 that produces the maximum number of primes for consecutive values of n,
 starting with n = 0.
 */

var isPrime = function (n) {
  if ( n <= 1) {
    return false;
  }
  var half = parseInt(n / 2);
  for (var i = 2; i <= half; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

var getConsecutiveLength = function (a, b) {
  var result = 0,
      length = 0,
      i = 0;
  while (true) {
    result = i * i + a * i + b;
    if (isPrime(result)) {
      i++;
      length++;
    } else {
      return length;
    }
  }
};

var findMaxPair = function () {
  var max = 0,
      tmp = 0,
      maxA, maxB;
  for (var i = -999; i < 1000; i++) {
    for (var j = -999; j < 1000; j++) {
      tmp = getConsecutiveLength(i, j);
      if (tmp > max) {
        max = tmp;
        maxA = i;
        maxB = j;
        // console.log('i:' + i + ' j:' + j + ' tmp:' + tmp);
      }
    }
  }
  return maxA * maxB;
};

console.log(findMaxPair());

