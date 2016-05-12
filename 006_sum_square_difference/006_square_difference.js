/*
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of
the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of
the first one hundred natural numbers and the square of the sum.
*/

console.log(Math.pow(5, 2));


var target = [];

for(var i = 1; i <= 100; i++) {
  target.push(i);
}

var sumOfNumbers = target.reduce(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
});

var sumOfSquares = target.reduce(function(previousValue, currentValue, index, array) {
  return previousValue + Math.pow(currentValue, 2);
});

var result = Math.pow(sumOfNumbers, 2) - sumOfSquares;

console.log(result);
