/* eslint-env mocha */
const Map = require('./Map.js');
const FromArray = require('../FromArray/FromArray.js');
const Iterator = require('../Iterator.js');
const chai = require('chai');

describe('Map', () => {
	it('Map is a function', () => {
		chai.assert.isFunction(Map, 'Map is not a function');
	});
	it('new Map() is an instance of Iterator', () => {
		const input = new FromArray([ 0, 1, 2, 3 ]);
		const test = new Map(input, (val) => val * 2);
		chai.assert.instanceOf(test, Iterator, 'Map is not an instance of Iterator');
	});
	it('expected input', () => {
		const input = new FromArray([ 0, 1, 2, 3 ]);
		const test = new Map(input, (val) => val * 2);
		test.next();
		const result = {
			value: 2,
			done: false,
		};
		chai.assert.deepEqual(test.next(), result, 'whoops');
	});
	it('expected input, finished', () => {
		const input = new FromArray([ 0, 1, 2, 3 ]);
		const test = new Map(input, (val) => val * 2);
		test.next();
		test.next();
		test.next();
		test.next();
		const result = {
			value: undefined,
			done: true,
		};
		chai.assert.deepEqual(test.next(), result, 'whoops');
	});
});
