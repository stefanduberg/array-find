function find(array, predicate) {
  var len = array.length;
  var i;
  if (len === 0) return;
  if (typeof predicate !== 'function') {
    throw new TypeError('predicate must be a function');
  }

  for (i = 0; i < len; i++) {
    if (predicate.call(this, array[i], i, array)) return array[i];
  }
  return;
}

module.exports = find;
