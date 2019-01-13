const Iterator = require('./Iterator.js');
const FromString = require('./FromString/FromString.js');
const FromStringReverse = require('./FromStringReverse/FromStringReverse.js');
const Map = require('./Map/Map.js');
const Filter = require('./Filter/Filter.js');

function isPalindrome(target) {
	const forward = new FromString(target)
		// could add slice to take half the string
		.pipe(Filter, (val) => val.match(/[^0-9a-z]/gi) === null)
		.pipe(Map, (val) => val.toLowerCase())
		.pipe(Map, (val) => val);
	const reverse = new FromStringReverse(target)
		// could add slice to take half the string
		.pipe(Filter, (val) => val.match(/[^0-9a-z]/gi) === null)
		.pipe(Map, (val) => val.toLowerCase())
		.pipe(Map, (val) => val);

	let currentF = forward.next();
	let currentR = reverse.next();
	let i = 0;
	const mid = Math.floor(target.length / 2);
	while (currentF.value === currentR.value && i < mid) {
		currentF = forward.next();
		currentR = reverse.next();
		i++;
	}
	const result = currentF.value === currentR.value;
	return result;
}

module.exports = isPalindrome;

console.log(isPalindrome('A Man, A Plan, A Canal – Panama!'));
