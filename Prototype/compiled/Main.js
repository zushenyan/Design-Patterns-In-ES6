/*
	JavaScript itself is already an prototype language.
*/

"use strict";

var person = Object.create({}, {
	_name: {
		value: "Mark",
		enumerable: true,
		writable: true,
		configurable: true
	},
	_age: {
		value: 22,
		enumerable: true,
		writable: true,
		configurable: true
	},
	_height: {
		value: "180 cm",
		enumerable: true,
		writable: true,
		configurable: true
	}
});

console.log(person);