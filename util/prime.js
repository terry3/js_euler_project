var primes = [2];

function calculateNthPrime(nth) {
  var count = 1,
      now = 3,
      primeFlag = true;
  if (primes.length >= nth) {
    return;
  }
  count = nth - primes.length;
  while (count < nth) {
    primeFlag = true;
    for (var i = 0; i < primes.length; i++) {
      if (now % primes[i] === 0) {
        primeFlag = false;
        break;
      }
    }

    if (primeFlag) {
      primes.push(now);
      count++;
    }
    now += 2;
  }
}

function isPrime(n) {
  var sqrtN = parseInt(Math.sqrt(n));
  var currentPrimeIndex = primes.length;
  if (primes[currentPrimeIndex - 1] < sqrtN) {
    while(calculateNthPrime(++currentPrimeIndex) < sqrtN);
  }
  for(var i = 0; primes[i] <= sqrtN; i++) {
    if (0 === n % primes[i]) {
      return false;
    }
  }
  return true;
}

exports.isPrime = isPrime;
exports.primes = primes;
