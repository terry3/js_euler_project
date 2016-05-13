/*
 The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1)
 contains 10 terms. Although it has not been proved yet (Collatz Problem),
 it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

var hash = {};

function collatz(input) {
  var sum = 1,
      bInput = input;
  while (bInput !== 1) {
    if (hash.hasOwnProperty(bInput)) {
      sum += hash[bInput];
      break;
    }
    if (bInput % 2 === 0) {
      bInput = bInput / 2;
    } else {
      bInput = 3 * bInput + 1;
    }
    sum++;
  }
  hash[input] = sum;
  return sum;
}

var max = 0,
    maxNumber,
    tmp;

for (var i = 999999; i > 0; i--) {
  tmp = collatz(i);
  if (tmp > max) {
    max = tmp;
    maxNumber = i;
  }
}

console.log(max);
console.log(maxNumber);


