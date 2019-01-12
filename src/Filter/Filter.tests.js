/* eslint-env mocha */
const Filter = require('./Filter.js');
const FromArray = require('../FromArray/FromArray.js');
const Iterator = require('../Iterator.js');
const chai = require('chai');

describe('Filter', () => {
	it('Filter is a function', () => {
		chai.assert.isFunction(Filter, 'Filter is not a function');
	});
	it('new Filter() is an instance of Iterator', () => {
		const input = new FromArray([0, 1, 2, 3]);
		const test = new Filter(input, (val) => val > 1);
		chai.assert.instanceOf(test, Iterator, 'Filter is not an instance of Iterator');
	});
	it('expected input', () => {
		const input = new FromArray([0, 1, 2, 3]);
		const test = new Filter(input, (val) => val > 1);
		const result = {
			value: 2,
			done: false
		}
		chai.assert.deepEqual(test.next(), result, 'whoops');
	});
	it('expected input, finished', () => {
		const input = new FromArray([0, 1, 2, 3]);
		const test = new Filter(input, (val) => val > 1);
		test.next();
		test.next();
		const result = {
			value: undefined,
			done: true
		}
		chai.assert.deepEqual(test.next(), result, 'whoops');
	});
});
