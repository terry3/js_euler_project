/*
 By starting at the top of the triangle below and moving to adjacent
 numbers on the row below, the maximum total from top to bottom is 23.
3
7 4
2 4 6
8 5 9 3

That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom in triangle.txt (right click
 and 'Save Link/Target As...'), a 15K text file containing a triangle
 with one-hundred rows.

NOTE: This is a much more difficult version of Problem 18. It is not
 possible to try every route to solve this problem, as there are 299
 altogether! If you could check one trillion (1012) routes every second it
 would take over twenty billion years to check them all. There is an
 efficient algorithm to solve it. ;o)
 */

var fs = require('fs');
var data = fs.readFileSync('p067_triangle.txt');
var tmpOrigin = data.toString().split('\n');
var origin = [];
for (var i = 0, j = 0; i < tmpOrigin.length; i++) {
  if (tmpOrigin[i] === '') {
    continue;
  }
  origin[j] = tmpOrigin[i].split(' ');
  j++;
}

var max = 0;
var tmpArr = [];

for (var i = 0; i < origin.length; i++) {
  var array = [];
  for (var j = 0; j < origin[i].length; j++) {
    var first,
        second;
    if (i - 1 < 0) {
      array[0] = parseInt(origin[i][j]);
      break;
    }
    if (j === 0) {
      array[j] = parseInt(origin[i][j]) + tmpArr[j];
    } else if (j === origin[i].length - 1) {
      array[j] = parseInt(origin[i][j]) + tmpArr[j - 1];
    } else {
      first = parseInt(origin[i][j]) + tmpArr[j - 1];
      second = parseInt(origin[i][j]) + tmpArr[j];
      array[j] = Math.max(first, second);
    }
  }
  tmpArr = array;
}

console.log(Math.max.apply(null, tmpArr));
