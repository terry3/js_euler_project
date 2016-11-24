/* The nth term of the sequence of triangle numbers is given by, tn = ½n(n+1); so the first ten triangle numbers are:
 * 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
 * By converting each letter in a word to a number corresponding to its alphabetical position and adding these values we form a word value. For example, the word value for SKY is 19 + 11 + 25 = 55 = t10. If the word value is a triangle number then we shall call the word a triangle word.
 * Using words.txt (right click and 'Save Link/Target As...'), a 16K text file containing nearly two-thousand common English words, how many are triangle words?*/

var fileContent = require('fs').readFileSync('./p042_words.txt');
var retArray = fileContent.toString().split(',').map((item) => item.replace(/\"/g, ''));

function stringValue(s) {
  return Array.prototype.reduce.call(s.toLowerCase(), (p, c) => {
    return p + c.charCodeAt(0) - 96
  }, 0 )
}

var max = retArray.reduce((p, c) => {
  return Math.max(p, stringValue(c));
}, 0)

var generateTriangleNum = function(max) {
  var i = 1;
  var ret = [];
  var tmp = 0;
  while (tmp < max) {
    tmp = i * (i + 1) / 2
    ret.push(tmp);
    i++;
  }
  return ret;
};

var triangleNums = generateTriangleNum(max);

console.log(retArray.reduce((p, c) => {
  if (!!~triangleNums.indexOf(stringValue(c))) {
    return p + 1;
  }
  return p;
}, 0));

