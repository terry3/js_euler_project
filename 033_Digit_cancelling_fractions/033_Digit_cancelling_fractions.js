/* The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.
 * We shall consider fractions like, 30/50 = 3/5, to be trivial examples.
 * There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.
 * If the product of these four fractions is given in its lowest common terms, find the value of the denominator.*/

const _ = require('lodash');
var x = 1,
    y = 1,
    m = 1,
    n = 1;

function isCurious(x, y, m, n) {
  var retA = (10 * x) + y;
  var retB = (10 * m) + n;
  if (retA >= retB) {
    return false;
  }
  var ret = retA / retB;
  if (x === m) {
    return ret === y/n
  } else if (x === n) {
    return ret === y/m
  } else if (y === m) {
    return ret === x/n
  } else if (y === n) {
    return ret === x/m
  }
  return false
}

function findRet() {
  var up = 1;
  var down = 1;
  for (x of _.range(1, 10)) {
    for (y of _.range(1, 10)) {
      for (m of _.range(1, 10)) {
        for (n of _.range(1, 10)) {
          if (isCurious(x, y, m, n)) {
            console.log(x, y, m, n)
            up *= (10 * x) + y
            down *= (10 * m) + n
          }
        }
      }
    }
  }
  return [up, down]
}

function lct(up, down) {
  var n = 2;
  while(true) {
    if (up % n === 0
        && down % n === 0) {
      up /= n;
      down /= n;
      n -= 1;
    }
    n += 1
    if (n > Math.max(up, down)) {
      return [up, down]
    }
  }
}

console.log(lct.apply(null, findRet()))
