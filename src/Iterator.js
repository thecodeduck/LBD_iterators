function Iterator() {
	throw new Error('instantiating base class');
}

Iterator.prototype.next = function next() {
	return {
		value: undefined,
		done: true,
	};
};

// Mentor code
Iterator.prototype.pipe = function pipe() {
	const constructorFunc = arguments[0];
	let iter = Object.create(constructorFunc.prototype);
	arguments[0] = this;

	iter = constructorFunc.apply(iter, arguments)
		|| iter;

	return iter;
};

module.exports = Iterator;
