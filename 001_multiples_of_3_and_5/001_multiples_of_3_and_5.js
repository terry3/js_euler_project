/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

function sum_of_all_multiples_of_x(x, t_max) {
    var i = 0;
    var ret = 0;
    for (i = 1; i < t_max; i += 1) {
        if (i % x === 0) {
            ret += i;
        }
    }
    return ret;
}

var mul_3 = sum_of_all_multiples_of_x(3, 1000);
var mul_5 = sum_of_all_multiples_of_x(5, 1000);
var mul_15 = sum_of_all_multiples_of_x(3 * 5, 1000);

console.log(mul_3 + mul_5 - mul_15);
