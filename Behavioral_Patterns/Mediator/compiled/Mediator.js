/**
	@abstract
	@interface
*/
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mediator = (function () {
	function Mediator() {
		_classCallCheck(this, Mediator);
	}

	_createClass(Mediator, [{
		key: "search",
		value: function search() {
			throw new Error("Must implement Mediator.search()");
		}
	}, {
		key: "update",
		value: function update() {
			throw new Error("Must implement Mediator.update()");
		}
	}, {
		key: "loadMore",
		value: function loadMore() {
			throw new Error("Must implement Mediator.loadMore()");
		}
	}]);

	return Mediator;
})();

exports.Mediator = Mediator;