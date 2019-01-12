/* eslint-env mocha */
const ToString = require('./ToString.js');
const FromArray = require('../FromArray/FromArray.js');
const Iterator = require('../Iterator.js');
const chai = require('chai');

describe('ToString', () => {
	it('ToString is a function', () => {
		chai.assert.isFunction(ToString, 'ToString is not a function');
	});
	it('new ToString() is an instance of Iterator', () => {
		const input = new FromArray([0, 1, 2, 3]);
		const test = new ToString(input);
		chai.assert.instanceOf(test, Iterator, 'ToString is not an instance of Iterator');
	});
	it('expected input', () => {
		const input = new FromArray([0, 1, 2, 3]);
		const result = {
			value: '0123',
			done: false
		}
		const test = new ToString(input);
		chai.assert.deepEqual(test.next(), result, 'whoops');
	});
	it('expected input, finished', () => {
		const input = new FromArray([0, 1, 2, 3]);
		const result = {
			value: undefined,
			done: true
		}
		const test = new ToString(input);
		test.next()
		chai.assert.deepEqual(test.next(), result, 'whoops');
	});
});
