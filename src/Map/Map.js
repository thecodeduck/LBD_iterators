const Iterator = require('../Iterator.js');

function Map(target, func) {
  if (target instanceof Iterator) {
    this._target = target;
  } else {throw new Error('target is not an Iterator');}
  if (typeof func === 'function') {
    this._func = func;
  } else {throw new Error('func is not a Function');}
}

Map.prototype = Object.create(Iterator.prototype);

Map.prototype.next = function next() {
  let result;
  let done = false;
  let current = this._target.next();
  if (!current.done) {
    result = this._func(current.value);
  } else { done = true; }
  return {
    value: result,
    done: done
  };
}

module.exports = Map;
