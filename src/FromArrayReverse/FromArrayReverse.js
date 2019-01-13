const Iterator = require('../Iterator.js');

function FromArrayReverse(target) {
	if (Array.isArray(target)) {
		this._target = target;
	} else { throw new Error('target is not an Array'); }
	this._begin = this._target.length - 1;
	this._end = -1;
}

FromArrayReverse.prototype = Object.create(Iterator.prototype);

FromArrayReverse.prototype.next = function next() {
	let result;
	if (this._begin > this._end) {
		result = {
			value: this._target[this._begin],
			done: false,
		};
		this._begin--;
	} else {
		result = {
			value: undefined,
			done: true,
		};
	}
	return result;
};

module.exports = FromArrayReverse;
