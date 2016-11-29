var primes = [2];

function calculateNthPrime(nth) {
  var count = 1,
      now = 3,
      primeFlag = true;
  if (primes.length >= nth) {
    return primes[nth - 1];
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
  return primes[nth - 1];
}

function isPrime(n) {
  if (1 === n) {
    return false;
  }
  var sqrtN = parseInt(Math.sqrt(n));
  var currentPrimeIndex = primes.length;
  if (primes[currentPrimeIndex - 1] < sqrtN) {
    /* while(calculateNthPrime(++currentPrimeIndex) < sqrtN);*/
    while(true ) {
      var tmp = calculateNthPrime(++currentPrimeIndex);
      if (!(tmp < sqrtN)) {
        break;
      }
    }
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
exports.calculateNthPrime = calculateNthPrime;
