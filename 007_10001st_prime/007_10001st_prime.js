/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
we can see that the 6th prime is 13.
What is the 10 001st prime number?
 */

function calculateNthPrime(nth) {
  var target = [],
      count = 1,
      now = 3,
      primeFlag = true;
  target.push(2);
  while (count < nth) {
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
      count++;
    }
    now += 2;
  }
  return target[target.length - 1];
}

console.log(calculateNthPrime(6));
console.log(calculateNthPrime(10001));
