/*
 Using names.txt (right click and 'Save Link/Target As...'), a 46K text file
 containing over five-thousand first names, begin by sorting it into
 alphabetical order. Then working out the alphabetical value for each name,
 multiply this value by its alphabetical position in the list to obtain a
 name score.

For example, when the list is sorted into alphabetical order, COLIN, which is
 worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN
 would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?
 */

var fs = require('fs');
var data = fs.readFileSync('p022_names.txt');
var array = data.toString().split(',');
var model = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var modelHash = {};

for (var i = 0; i < model.length; i++) {
  modelHash[model[i]] = i + 1;
}

// alphabetical order
array = array.sort();
for (var i = 0; i < array.length; i++) {
  array[i] = array[i].substring(1, array[i].length - 1);
}

var result = 0;

for (var i = 0; i < array.length; i++) {
  var sum = 0;
  for (var j = 0; j < array[i].length; j++) {
    sum += modelHash[array[i][j]];
  }
  result += (i + 1) * sum;
}

console.log(result);






