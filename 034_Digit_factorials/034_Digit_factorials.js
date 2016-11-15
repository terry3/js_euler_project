/* 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.
 * Find the sum of all numbers which are equal to the sum of the factorial of their digits.
 * Note: as 1! = 1 and 2! = 2 are not sums they are not included.*/

const _ = require('lodash');
var factorialList = _.range(0, 10).map(function(item) {
  return factorial(item)
})

function factorial(n) {
  if (n === 0) {
    return 1
  } else if (n < 3) {
    return n
  }
  var helper = function (n, ret) {
    if (n === 0) {
      return ret
    }
    return helper(n - 1, ret * n)
  }
  return helper(n, 1)
}

function findMaxCurious() {
  var curMax = factorialList.reduce(function(a, b) {
    return a + b
  }),
      index = 1,
      count = 0;
  while (true) {
    if (index > curMax) {
      return count
    }
    index *= 10;
    curMax += curMax;
    count++
  }
}

function isCuriousNum(n) {
  var s = n.toString(),
      sum = 0
  for (c of s) {
    sum += factorialList[parseInt(c)]
  }
  if (n === sum) {
    return true
  }
  return false
}

function calcSum() {
  var n = 10,
      sum = 0
  while (n < 2550000) {
    if (isCuriousNum(n)) {
      sum += n
    }
    n++
  }
  console.log(sum);
}

calcSum()

