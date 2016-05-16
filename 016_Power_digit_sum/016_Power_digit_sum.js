/*
 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
What is the sum of the digits of the number 21000?
 */


// use big.js to handle big number power calculate.
var Big = require('big.js');

var result = 0;
var origin  = Big(2);
var target = origin.pow(1000);
var numberStr = target.toFixed(target.e).toString();
numberStr = numberStr.slice(0, numberStr.indexOf('.'));

for (var i = 0; i < numberStr.length; i++) {
  result += parseInt(numberStr[i]);
}

console.log(result);


