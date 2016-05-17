/*
 A perfect number is a number for which the sum of its proper divisors is
 exactly equal to the number. For example, the sum of the proper divisors
 of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect
 number.

A number n is called deficient if the sum of its proper divisors is less
 than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest
 number that can be written as the sum of two abundant numbers is 24.
 By mathematical analysis, it can be shown that all integers greater than
 28123 can be written as the sum of two abundant numbers. However, this upper
 limit cannot be reduced any further by analysis even though it is known that
 the greatest number that cannot be expressed as the sum of two abundant
 numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the
 sum of two abundant numbers.
 */
var getSumOfDivisors = function(input) {
  var tmp = parseInt(Math.sqrt(input)),
      result = 1,
      div = 0;
  for (var i = 2; i <= tmp; i++) {
    if (input % i === 0) {
      div = input / i;
      result += i;
      if (i !== div) {
        result += div;
      }
    }
  }
  return result;
};

var set = new Set();
var sum = 0;
console.log(set);

for (var i = 1; i < 28123; i++) {
  var tmp = getSumOfDivisors(i),
      flag = false;
  if (tmp > i) {
    set.add(i);
  }
  set.forEach(function(item) {
    if (set.has(i - item)) {
      flag = true;
    }
  });
  if (!flag) {
    sum += i;
  }
}

console.log(sum);
