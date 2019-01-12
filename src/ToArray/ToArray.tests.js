/* eslint-env mocha */
const ToArray = require('./ToArray.js');
const FromArray = require('../FromArray/FromArray.js');
const Iterator = require('../Iterator.js');
const chai = require('chai');

describe('ToArray', () => {
	it('ToArray is a function', () => {
		chai.assert.isFunction(ToArray, 'ToArray is not a function');
	});
	it('new ToArray() is an instance of Iterator', () => {
		const input = new FromArray([ 0, 1, 2, 3 ]);
		const test = new ToArray(input);
		chai.assert.instanceOf(test, Iterator, 'ToArray is not an instance of Iterator');
	});
	it('expected input', () => {
		const input = new FromArray([ 0, 1, 2, 3 ]);
		const result = {
			value: [ 0, 1, 2, 3 ],
			done: false,
		};
		const test = new ToArray(input);
		chai.assert.deepEqual(test.next(), result, 'whoops');
	});
	it('expected input, finished', () => {
		const input = new FromArray([ 0, 1, 2, 3 ]);
		const result = {
			value: undefined,
			done: true,
		};
		const test = new ToArray(input);
		test.next();
		chai.assert.deepEqual(test.next(), result, 'whoops');
	});
});
