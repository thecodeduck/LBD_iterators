const Iterator = require('../Iterator.js');

function FromString(target) {
	if (typeof target === 'string') {
		this._target = target;
	} else { throw new Error('target is not a String'); }
	this._begin = 0;
	this._end = this._target.length;
}

FromString.prototype = Object.create(Iterator.prototype);

FromString.prototype.next = function next() {
	let result;
	if (this._begin < this._end) {
		result = {
			value: this._target[this._begin],
			done: false,
		};
		this._begin++;
	} else {
		result = {
			value: undefined,
			done: true,
		};
	}
	return result;
};

module.exports = FromString;
