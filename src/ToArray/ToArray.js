const Iterator = require('../Iterator.js');

function ToArray(target) {
  if (target instanceof Iterator) {
    this._target = target;
  } else {throw new Error('target is not an Iterator');}
}

ToArray.prototype = Object.create(Iterator.prototype);

ToArray.prototype.next = function next() {
  let resultArr = [];
  let current = this._target.next();
  while (!current.done) {
    resultArr.push(current.value);
    current = this._target.next();
  }
  return {
    value: resultArr,
    done: true
  };
}

module.exports = ToArray;
