/*
 Let d(n) be defined as the sum of proper divisors of n (numbers less than n
 which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and
 each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44,
 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4,
 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
 */

var getSumOfDivisors = function(input) {
  var tmp = parseInt(Math.sqrt(input)),
      result = 1;
  for (var i = 2; i <= tmp; i++) {
    if (input % i === 0) {
      result += i + input / i;
    }
  }
  return result;
};

var result = 0;
var hash = {};
for (var i = 2; i < 10000; i++) {
  var a, b;
  a = getSumOfDivisors(i);
  b = getSumOfDivisors(a);
  if (i === b && i !== a) {
    result += i;
  }
}

console.log(result);
