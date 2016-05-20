/*
 Surprisingly there are only three numbers that can be written as the
 sum of fourth powers of their digits:
1634 = 14 + 64 + 34 + 44
8208 = 84 + 24 + 04 + 84
9474 = 94 + 44 + 74 + 44
As 1 = 14 is not a sum it is not included.
The sum of these numbers is 1634 + 8208 + 9474 = 19316.
Find the sum of all the numbers that can be written as the sum of
 fifth powers of their digits.
 */

var result = 0;

var calcDigits = function(input) {
  var tmp = input,
      div = 0,
      result = 0;
  while (true) {
    if (0 === tmp) {
      break;
    }
    div = tmp % 10;
    result += Math.pow(div, 5);
    tmp = parseInt(tmp / 10);
  }
  return result;
};

// Math.pow(9, 5) = 59049
// 7 digits = 7 * 59049 = 413343
var max = 7 * Math.pow(9, 5);

for (var i = 2; i < max; i++) {
  var tmp = calcDigits(i);
  if (tmp === i) {
    result += tmp;
  }
}

console.log(result);
