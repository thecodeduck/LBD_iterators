/* eslint-env mocha */
const FromString = require('./FromString.js');
const Iterator = require('../Iterator.js');
const chai = require('chai');

describe('FromString', () => {
	it('FromString is a function', () => {
		chai.assert.isFunction(FromString, 'FromString is not a function');
	});
	it('new FromString() is an instance of Iterator', () => {
		const test = new FromString('');
		chai.assert.instanceOf(test, Iterator, 'FromString is not an instance of Iterator');
	});
	it('expected input', () => {
		const arr = 'test';
		const result = {
			value: 't',
			done: false,
		};
		const test = new FromString(arr);
		chai.assert.deepEqual(test.next(), result, 'whoops');
	});
	it('expected input, finished', () => {
		const arr = 'test';
		const result = {
			value: undefined,
			done: true,
		};
		const test = new FromString(arr);
		test.next();
		test.next();
		test.next();
		test.next();
		chai.assert.deepEqual(test.next(), result, 'whoops');
	});
});
