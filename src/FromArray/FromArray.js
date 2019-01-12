const Iterator = require('../Iterator.js');

function FromArray(target) {
  if (Array.isArray(target)) {
    this._target = target;
  } else {throw new Error('target is not an Array');}
  this._begin = 0;
  this._end = this._target.length;
}

FromArray.prototype = Object.create(Iterator.prototype);

FromArray.prototype.next = function next() {
  let result;
  if (this._begin < this._end) {
    result = {
      value: this._target[this._begin],
      done: false
    };
    this._begin++;
  } else {
    result = {
      value: undefined,
      done: true
    };
  }
  return result;
};

module.exports = FromArray;
