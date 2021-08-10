const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;
// const app = require('../app');

// Globely set the invoktion of the functions
sayHelloFunc = sayHello();
addNumbersFunc = addNumbers(1, 5);

describe('sayHello()', () => {
	it('should return Hello', () => {
		// let result = sayHello();
		assert.equal(sayHelloFunc, 'Hello');
	});

	it('sayhello should be a string', () => {
		// let result = sayHello();
		assert.typeOf(sayHelloFunc, 'string');
	});
});

describe('addNumbers()', () => {
	it('SHould be above 5', () => {
		// let result = addNumbers(1, 5);
		assert.isAbove(addNumbersFunc, 5);
	});

	it('SHould be a number', () => {
		// let result = addNumbers(1, 'hi');
		assert.typeOf(addNumbersFunc, 'number');
	});
});
