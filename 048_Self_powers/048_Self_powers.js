/* The series, 11 + 22 + 33 + ... + 1010 = 10405071317.
 * Find the last ten digits of the series, 11 + 22 + 33 + ... + 10001000.*/

var Big = require('big.js');
var origin = Big(0);
var i = 1;

for(i = 1;i <= 1000;i++) {
  var tmp = Big(i)
  origin = origin.plus(tmp.pow(i));
}

var str = origin.toFixed();
console.log(str.substring(str.length - 10));


