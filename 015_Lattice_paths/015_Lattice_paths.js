/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
 img: https://projecteuler.net/problem=15
How many such routes are there through a 20×20 grid?
 */

function factorial(x){
  var result = 1;
  while (x != 1) {
    result *= x;
    x -= 1;
  }
  return result;
}

function combination_x_y(x, y) {
  var sum_x = 0,
      sum_y = 0,
      sum_z = 0;
  sum_x = factorial(x);
  sum_y = factorial(y);
  sum_z = factorial(Math.abs(x-y));
  return parseInt(sum_x / (sum_z * sum_y));
}

console.log(combination_x_y(40, 20));
