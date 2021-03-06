const Iterator = require('../Iterator.js');

function ToArray(target) {
	if (target instanceof Iterator) {
		this._target = target;
	} else { throw new Error('target is not an Iterator'); }
}

ToArray.prototype = Object.create(Iterator.prototype);

ToArray.prototype.next = function next() {
	const resultArr = [];
	let current = this._target.next();
	if (current.done) {
		return {
			value: undefined,
			done: true,
		};
	} else {
		while (!current.done) {
			resultArr.push(current.value);
			current = this._target.next();
		}
	}
	return {
		value: resultArr,
		done: false,
	};
};

module.exports = ToArray;
