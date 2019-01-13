/* eslint-env mocha */
const FromStringReverse = require('./FromStringReverse.js');
const Iterator = require('../Iterator.js');
const chai = require('chai');

describe('FromStringReverse', () => {
	it('FromStringReverse is a function', () => {
		chai.assert.isFunction(FromStringReverse, 'FromStringReverse is not a function');
	});
	it('new FromStringReverse() is an instance of Iterator', () => {
		const test = new FromStringReverse('');
		chai.assert.instanceOf(test, Iterator, 'FromStringReverse is not an instance of Iterator');
	});
	it('expected input', () => {
		const arr = 'test';
		const result = {
			value: 's',
			done: false,
		};
		const test = new FromStringReverse(arr);
		test.next();
		chai.assert.deepEqual(test.next(), result, 'whoops');
	});
	it('expected input, finished', () => {
		const arr = 'test';
		const result = {
			value: undefined,
			done: true,
		};
		const test = new FromStringReverse(arr);
		test.next();
		test.next();
		test.next();
		test.next();
		chai.assert.deepEqual(test.next(), result, 'whoops');
	});
});
