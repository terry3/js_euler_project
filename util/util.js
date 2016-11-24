var isPandigital = function(a) {
  for (var i = 1; i < a.length + 1; i++) {
    if (a.indexOf(i.toString()) === -1) {
      return false;
    }
  }
  return true;
}

exports.isPandigital = isPandigital;
