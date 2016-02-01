(function (root, factory) {

  'use strict';

  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.shimArrayFind = factory();
  }

}(this, factory));

function factory()
{

  function find(array, predicate, context) {
    if (typeof Array.prototype.find === 'function') {
      return array.find(predicate, context);
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

  return find;

}