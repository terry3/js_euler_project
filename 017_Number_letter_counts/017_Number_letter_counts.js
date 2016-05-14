/*
 If the numbers 1 to 5 are written out in words: one, two, three, four, five,
 then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out
 in words, how many letters would be used?

NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and
 forty-two) contains 23 letters and 115 (one hundred and fifteen) contains
 20 letters. The use of "and" when writing out numbers is in compliance with
 British usage.
 */

var unitString = ['', 'one', 'two', 'three', 'four', 'five',
              'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
              'twelve', 'thirteen', 'fourteen', 'fifteen',
              'sixteen', 'seventeen', 'eighteen', 'nineteen'];

var digitString = ['twenty', 'thirty', 'forty', 'fifty', 'sixty',
              'seventy', 'eighty', 'ninety'];

var hundredString = 'hundred';

var thousandString = 'thousand';

var andString = 'and';

function numberToString(input) {
  var hundred,
      digit,
      unit,
      length = 0;
  if (input < unitString.length) {
    return unitString[input].length;
  }
  hundred = parseInt(input / 100);
  digit = parseInt((input % 100) / 10);
  unit = input % 10;
  if (hundred) {
    length += unitString[hundred].length + hundredString.length;
  }

  if (hundred && (digit || unit)) {
    length += andString.length;
  }

  if (digit >= 2) {
    length += digitString[digit - 2].length;
  } else {
    length += unitString[digit * 10 + unit].length;
  }

  if (digit >= 2 && unit) {
    length += unitString[unit].length;
  }

  return length;
}

var length = 0;

for (var i = 1; i < 1000; i++) {
  length += numberToString(i);
}

console.log(length + unitString[1].length + thousandString.length);
