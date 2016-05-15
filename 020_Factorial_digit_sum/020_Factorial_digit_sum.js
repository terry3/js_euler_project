/*
 n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
 */

var Big = require('big.js');

var factorial = function(number) {
  var result = Big(1);
  for (var i = number; i > 0; i--) {
    result = result.mul(i);
  }
  return result;
};

var result = factorial(100);
var sum = 0;
for (var i = 0; i < result.c.length; i++) {
  sum += parseInt(result.c[i]);
}

console.log(sum);
