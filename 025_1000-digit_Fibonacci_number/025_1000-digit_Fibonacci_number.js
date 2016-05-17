/*
 The Fibonacci sequence is defined by the recurrence relation:
Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:
F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.
What is the index of the first term in the Fibonacci sequence to contain
 1000 digits?
 */

var big = require('big.js');
var getNumberLength = function(input){
  // input is a big object
  return input.c.length;
};

var fibonacci = function() {
  var first = big(1),
      second = big(1),
      index = 2;
  return function() {
    var result = first.add(second);
    first = second;
    second = result;
    index++;
    return {
      result: result,
      index: index
    };
  };
};

var fibonacciNext = fibonacci();
while(true) {
  var obj = fibonacciNext();
  if (getNumberLength(obj.result) === 1000) {
    console.log(obj.index);
    break;
  }
}
