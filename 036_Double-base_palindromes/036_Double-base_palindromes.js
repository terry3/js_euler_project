/* The decimal number, 585 = 1001001001 (binary), is palindromic in both bases.
 * Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.
 * (Please note that the palindromic number, in either base, may not include leading zeros.)*/
function reverse(s){
  return s.split("").reverse().join("");
}

function isPalindromic(s) {
  return s === reverse(s)
}

var i = 1;
var ret = 0;
while(i < 1000000) {
  if (isPalindromic(i.toString())
      && isPalindromic(i.toString(2))) {
    ret += i
  }
  i++;
}

console.log(ret);
