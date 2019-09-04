'use strict';

function find(array, predicate, context) {
  var nativeFind = Array.prototype.find;

  if (typeof nativeFind === 'function') {
    return nativeFind.call(array, predicate, context);
  }

  context = context || this;
  var length = array.length;
  var i;

  if (typeof predicate !== 'function') {
    throw new TypeError(predicate + ' is not a function');
  }

  for (i = 0; i < length; i++) {
    if (predicate.call(context, array[i], i, array)) {
      return array[i];
    }
  }
}

module.exports = find;
