/*
2520 is the smallest number that can be divided by each of the numbers
from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all
of the numbers from 1 to 20?
 */

function getCommonMultiple(a, b) {
  var mod,
      fakeA = a,
      fakeB = b;
  while (fakeB !== 0) {
    mod = fakeA % fakeB;
    fakeA = fakeB;
    fakeB = mod;
  } // fakeA is the common divisor when the loop broke.
  return a * b / fakeA;
}

var target = [];
for(var i = 1; i <= 20; i++) {
  target.push(i);
}

// calculate common divide
var result = target.reduce(function(previousValue, currentValue, index, array) {
  return getCommonMultiple(previousValue, currentValue);
});

console.log(result);

