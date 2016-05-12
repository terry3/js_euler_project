/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
 */

const MAX_NUMBER = 1000;

for (var i = 1; i < MAX_NUMBER; i++) {
  for (var j = 1; j < MAX_NUMBER; j++) {
    for (var z = 1; z < MAX_NUMBER; z++) {
      if (1000 === i + j + z
          && Math.pow(z, 2) === Math.pow(i, 2) + Math.pow(j, 2)) {
        console.log('a:' + i + ' b:' + j + ' c:' + z);
        console.log(i * j * z);
        process.exit(0);
      }
    }
  }
}
