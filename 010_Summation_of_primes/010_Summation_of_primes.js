/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
 */

function calculateSumOfPrime(maxValue) {
  var target = [],
      count = 2,
      now = 3,
      primeFlag = true,
      result = 2;

  target.push(2);
  while (true) {
    primeFlag = true;
    for (var i = 0; i < target.length; i++) {
      if (now % target[i] === 0) {
        primeFlag = false;
        break;
      }
    }

    if (primeFlag) {
      debugger;
      target.push(now);
      if (now < maxValue) {
        result += now;
      } else {
        break;
      }
    }
    now += 2;
  }
  return result;
}

console.log(calculateSumOfPrime(10));
console.log(calculateSumOfPrime(2000000));
