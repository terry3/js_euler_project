var isPandigital = function(a) {
  for (var i = 1; i < a.length + 1; i++) {
    if (a.indexOf(i.toString()) === -1) {
      return false;
    }
  }
  return true;
}

var permutator = function(inputArr) {
  var results = [];
  function permute(arr, memo) {
    var cur, memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }
    return results;
  }
  return permute(inputArr);
}

exports.isPandigital = isPandigital;
exports.permutator = permutator;
