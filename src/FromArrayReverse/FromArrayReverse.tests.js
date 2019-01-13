/* eslint-env mocha */
const FromArrayReverse = require('./FromArrayReverse.js');
const Iterator = require('../Iterator.js');
const chai = require('chai');

describe('FromArrayReverse', () => {
	it('FromArrayReverse is a function', () => {
		chai.assert.isFunction(FromArrayReverse, 'FromArrayReverse is not a function');
	});
	it('new FromArrayReverse() is an instance of Iterator', () => {
		const test = new FromArrayReverse([]);
		chai.assert.instanceOf(test, Iterator, 'FromArrayReverse is not an instance of Iterator');
	});
	it('expected input', () => {
		const arr = [ 0, 1, 2, 3 ];
		const result = {
			value: 2,
			done: false,
		};
		const test = new FromArrayReverse(arr);
		test.next();
		chai.assert.deepEqual(test.next(), result, 'whoops');
	});
	it('expected input, finished', () => {
		const arr = [ 0, 1, 2, 3 ];
		const result = {
			value: undefined,
			done: true,
		};
		const test = new FromArrayReverse(arr);
		test.next();
		test.next();
		test.next();
		test.next();
		chai.assert.deepEqual(test.next(), result, 'whoops');
	});
});
