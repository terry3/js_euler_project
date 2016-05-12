/*
The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.

 1000-digi number make reference to var origin
Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?
*/

var origin ='\
73167176531330624919225119674426574742355349194934\n\
96983520312774506326239578318016984801869478851843\n\
85861560789112949495459501737958331952853208805511\n\
12540698747158523863050715693290963295227443043557\n\
66896648950445244523161731856403098711121722383113\n\
62229893423380308135336276614282806444486645238749\n\
30358907296290491560440772390713810515859307960866\n\
70172427121883998797908792274921901699720888093776\n\
65727333001053367881220235421809751254540594752243\n\
52584907711670556013604839586446706324415722155397\n\
53697817977846174064955149290862569321978468622482\n\
83972241375657056057490261407972968652414535100474\n\
82166370484403199890008895243450658541227588666881\n\
16427171479924442928230863465674813919123162824586\n\
17866458359124566529476545682848912883142607690042\n\
24219022671055626321111109370544217506941658960408\n\
07198403850962455444362981230987879927244284909188\n\
84580156166097919133875499200524063689912560717606\n\
05886116467109405077541002256983155200055935729725\n\
71636269561882670428252483600823257530420752963450'
;
// East, South, SouthEast, SouthWest
var target = origin.split('\n');
const WIDTH_MAX = target[0].length - 1;
const HEIGHT_MAX = target.length - 1;
const MAX_LINK_NUM = 13;

console.log(WIDTH_MAX);
console.log(HEIGHT_MAX);

function getSouthWest(a, b) {
  var result = 1;
  if (b - MAX_LINK_NUM < 0
      || a + MAX_LINK_NUM > HEIGHT_MAX) {
    return 0;
  }
  for (var i = 0; i < MAX_LINK_NUM; i++) {
    result *= parseInt(target[a + i][b - i]);
  }
  return result;
}

function getSouthEast(a, b) {
  var result = 1;
  if (a + MAX_LINK_NUM > HEIGHT_MAX
      || b + MAX_LINK_NUM > WIDTH_MAX) {
    return 0;
  }
  for (var i = 0; i < MAX_LINK_NUM; i++) {
    result *= parseInt(target[a + i][b + i]);
  }
  return result;
}

function getSouth(a, b) {
  var result = 1;
  if (a + MAX_LINK_NUM > HEIGHT_MAX) {
    return 0;
  }
  for (var i = 0; i < MAX_LINK_NUM; i++) {
    result *= parseInt(target[a + i][b]);
  }
  return result;
}

function getEast(a, b) {
  var result = 1;
  if (b + MAX_LINK_NUM > WIDTH_MAX) {
    return 0;
  }
  debugger;
  // console.log('a:' + a + ' b:' + b);
  for (var i = 0; i < MAX_LINK_NUM; i++) {
    result *= parseInt(target[a][b + i]);
  }
  return result;
}

var max = 0,
    east = 0,
    south = 0,
    southEast = 0,
    southWest = 0;
// find the max production
for(var i = 0; i <= HEIGHT_MAX; i++) {
  for(var j = 0; j <= WIDTH_MAX; j++) {
    east = getEast(i, j);
    south = getSouth(i, j);
    southEast = getSouthEast(i, j);
    southWest = getSouthWest(i, j);
    max = Math.max(east, south, southEast, southWest, max);
  }
}

console.log(max);

