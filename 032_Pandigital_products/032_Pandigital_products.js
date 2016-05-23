/*
 We shall say that an n-digit number is pandigital if it makes use of
 all the digits 1 to n exactly once; for example, the 5-digit number,
 15234, is 1 through 5 pandigital.
The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing
 multiplicand, multiplier, and product is 1 through 9 pandigital.
Find the sum of all products whose multiplicand/multiplier/product identity
 can be written as a 1 through 9 pandigital.
HINT: Some products can be obtained in more than one way so be sure to only
 include it once in your sum.
 */

var array = [];
var result = 0;
var isPandigital = function(a, b, result){
  var tmp = '' + a + b + result;
  if (tmp.length !== 9) {
    return false;
  }
  for (var i = 1; i < 10; i++) {
    if (tmp.indexOf(i.toString()) === -1) {
      return false;
    }
  }
  return true;
};

for (var i = 1; i < 100; i++) {
  for (var j = 1; j < 10000; j++) {
    if (isPandigital(i, j, i * j)) {
      if (array.indexOf(i * j) === -1) {
        // console.log('i:' + i + ' j:' + j + ' i * j:' + i * j);
        array.push(i * j);
      }
    }
  }
}

array.forEach(function(item){
  result += item;
});

console.log(result);
