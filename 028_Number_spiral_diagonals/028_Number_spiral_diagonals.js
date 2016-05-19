/*
 Starting with the number 1 and moving to the right in a clockwise
 direction a 5 by 5 spiral is formed as follows:
21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13
It can be verified that the sum of the numbers on the diagonals is 101.
What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral
 formed in the same way?
 */

// Try to find the formula
// North-East: (n + 1) * (n + 1)
// North-West: n*n - n + 1
// South-West: n*n - 2*n + 2
// South-East: n*n - 3*n + 3
// n is corner

var maxN = (1001 - 1) / 2,
    result = 0,
    node = 3;
for (var i = 0; i < maxN; i++) {
  result += node * node;
  result += node * node - node + 1;
  result += node * node - 2 * node + 2;
  result += node * node - 3 * node + 3;
  node += 2;
}

console.log(result + 1);        // plus 1 the origin point


