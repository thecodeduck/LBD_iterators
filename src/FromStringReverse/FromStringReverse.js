const Iterator = require('../Iterator.js');

function FromStringReverse(target) {
	if (typeof target === 'string') {
		this._target = target;
	} else { throw new Error('target is not a String'); }
	this._begin = this._target.length - 1;
	this._end = 0;
}

FromStringReverse.prototype = Object.create(Iterator.prototype);

FromStringReverse.prototype.next = function next() {
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

module.exports = FromStringReverse;
