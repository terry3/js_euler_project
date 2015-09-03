/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

*/
var n9 = 999 * 999;
var ls = n9.toString().substring(0, 3);
var ln = parseInt(ls);

function find_max_p_number(number) {
    var a = 0;
    var ls, rs, n;
    while (number > 0) {
        a = 100;
        ls = number.toString();
        rs = ls.split("").reverse().join("");
        n = parseInt(ls + rs);
        while (a < 1000) {
            if (n % a === 0 && parseInt(n / a) < 1000) {
                return [a, n / a, n];
            }
            a += 1;
        }
        number -= 1;
    }
};

console.log(find_max_p_number(ln));
