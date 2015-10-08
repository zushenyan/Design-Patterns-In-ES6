/*
	Iterator design pattern provides a universal way to traverse a collection of objects,
	which means, as a client, by using interface provided by iterator, you can operate
	a collection of objects without knowing much about a collection.

	In JavaScript, there is a forEach as default iterating method.
*/

"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Iterator = (function () {
	function Iterator(collection) {
		_classCallCheck(this, Iterator);

		this._index = 0;
		this._collection = collection;
	}

	_createClass(Iterator, [{
		key: "next",
		value: function next() {
			return this.hasNext() ? this._collection[this._index++] : null;
		}
	}, {
		key: "hasNext",
		value: function hasNext() {
			return this._index < this._collection.length;
		}
	}, {
		key: "reset",
		value: function reset() {
			this._index = 0;
		}
	}]);

	return Iterator;
})();

var arr = ["meow", 123, "ggyy", 3.14];
var iterator = new Iterator(arr);

while (iterator.hasNext()) {
	console.log(iterator.next());
}