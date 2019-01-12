/* eslint-env mocha */
const FromArray = require('./FromArray.js');
const Iterator = require('../Iterator.js');
const chai = require('chai');

describe('FromArray', () => {
	it('FromArray is a function', () => {
		chai.assert.isFunction(FromArray, 'FromArray is not a function');
	});
	it('new FromArray() is an instance of Iterator', () => {
		const test = new FromArray([]);
		chai.assert.instanceOf(test, Iterator, 'FromArray is not an instance of Iterator');
	});
	it('expected input', () => {
		const arr = [ 0, 1, 2, 3 ];
		const result = {
			value: 0,
			done: false
		}
		const test = new FromArray(arr);
		chai.assert.deepEqual(test.next(), result, 'whoops');
	});
	it('expected input, finished', () => {
		const arr = [ 0, 1, 2, 3 ];
		const result = {
			value: undefined,
			done: true
		}
		const test = new FromArray(arr);
		test.next();
		test.next();
		test.next();
		test.next();
		chai.assert.deepEqual(test.next(), result, 'whoops');
	});
});
