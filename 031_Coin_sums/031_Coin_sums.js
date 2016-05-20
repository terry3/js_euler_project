/*
 In England the currency is made up of pound, £, and pence, p,
 and there are eight coins in general circulation:
1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
It is possible to make £2 in the following way:
1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
How many different ways can £2 be made using any number of coins?
 */
var nList = [2, 5, 10, 20, 50, 100],
    itList = [0, 100, 40, 20, 10, 4, 2, 0];

function calc_conis_list(runList) {
  var ret = 0;
  for (var i = 0; i < runList.length; i++) {
    ret += runList[i] * nList[i];
  }
  if (ret <= 200) {
    return true;
  }
  return false;
}

function calc_combination_conis() {
  var sum = 0;
  for (var a = 0; a < itList[1]; a++) {
    for (var b = 0; b < itList[2]; b++) {
      for (var c = 0; c < itList[3]; c++) {
        for (var d = 0; d < itList[4]; d++) {
          for (var e = 0; e < itList[5]; e++) {
            for (var f = 0; f < itList[6]; f++) {
              var tmp = [];
              tmp.push(a);
              tmp.push(b);
              tmp.push(c);
              tmp.push(d);
              tmp.push(e);
              tmp.push(f);
              if (calc_conis_list(tmp)) {
                sum += 1;
              }
            }
          }
        }
      }
    }
  }
  return sum;
}

console.log(calc_combination_conis() + 7);
