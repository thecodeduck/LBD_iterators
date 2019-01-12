const Iterator = require('../Iterator.js');

function Filter(target, func) {
	if (target instanceof Iterator) {
		this._target = target;
	} else { throw new Error('target is not an Iterator'); }
	if (typeof func === 'function') {
		this._func = func;
	} else { throw new Error('func is not a Function'); }
}

Filter.prototype = Object.create(Iterator.prototype);

Filter.prototype.next = function next() {
	let result;
	let done = false;
	let current = this._target.next();
	if (!current.done) {
		while (!this._func(current.value)) {
			current = this._target.next();
		}
		result = current.value;
	} else {
		done = true;
	}
	return {
		value: result,
		done,
	};
};

module.exports = Filter;
