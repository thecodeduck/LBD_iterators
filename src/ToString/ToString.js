const Iterator = require('../Iterator.js');

function ToString(target) {
	if (target instanceof Iterator) {
		this._target = target;
	} else { throw new Error('target is not an Iterator'); }
}

ToString.prototype = Object.create(Iterator.prototype);

ToString.prototype.next = function next() {
	let resultStr = '';
	let current = this._target.next();
	if (current.done) {
		return {
			value: undefined,
			done: true,
		};
	} else {
		while (!current.done) {
			resultStr += String(current.value);
			current = this._target.next();
		}
	}
	return {
		value: resultStr,
		done: false,
	};
};

module.exports = ToString;
