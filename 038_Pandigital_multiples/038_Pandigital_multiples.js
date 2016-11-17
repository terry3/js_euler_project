/* Take the number 192 and multiply it by each of 1, 2, and 3:
 * 192 × 1 = 192
 * 192 × 2 = 384
 * 192 × 3 = 576
 * By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)
 * The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).
 * What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?*/

const _ = require('lodash');

function isAllMatch(str) {
  for (var i of _.range(1, 10)) {
    if (!~str.indexOf(i.toString())) {
      return false;
    }
  }
  return true;
}

function generateSuchNumber(n) {
  var ret = '';
  var i = 1;
  while (ret.length < 9) {
    ret += (n * i).toString();
    i++;
  }
  return ret.length === 9 ? ret : '';
}

function findMaxNumber() {
  var i = 2;
  var tmp;
  var max = 0;
  while (i < 10000) {
    tmp = generateSuchNumber(i);
    if (isAllMatch(tmp)) {
      if (parseInt(tmp) > max) {
        max = parseInt(tmp)
      }
    }
    i++;
  }
  return max;
}

console.log(findMaxNumber());
