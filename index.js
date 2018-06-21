
function find(array, predicate, context) {
  if (typeof Array.prototype.find === 'function') {
    return array.find(predicate, context);
  }

  context = context || this;
  const length = array.length;

  if (typeof predicate !== 'function') {
    throw new TypeError(predicate + ' is not a function');
  }

  for (let i = 0; i < length; i++) {
    if (predicate.call(context, array[i], i, array)) {
      return array[i];
    }
  }
}

export default find;
