/*
	Define an algorithm and implement part of it, leaving some abstract part to its subclasses to implement.
*/

/**
	@abstract
*/
"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Process = (function () {
	function Process() {
		_classCallCheck(this, Process);
	}

	_createClass(Process, [{
		key: "start",
		value: function start() {
			console.log("Process starts running...");
			this.doSomethingA();
			console.log("Process does something else.");
			this.doSomethingB();
			console.log("Process done.");
		}
	}, {
		key: "doSomethingA",
		value: function doSomethingA() {
			throw new Error("Must implement doSomethingA()");
		}
	}, {
		key: "doSomethingB",
		value: function doSomethingB() {
			throw new Error("Must implement doSomethingB()");
		}
	}]);

	return Process;
})();

var ConcreteProcess = (function (_Process) {
	_inherits(ConcreteProcess, _Process);

	function ConcreteProcess() {
		_classCallCheck(this, ConcreteProcess);

		_get(Object.getPrototypeOf(ConcreteProcess.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(ConcreteProcess, [{
		key: "doSomethingA",
		value: function doSomethingA() {
			console.log("Concrete Process is handling doSomethingA()");
		}
	}, {
		key: "doSomethingB",
		value: function doSomethingB() {
			console.log("Concrete Process is handling doSomethingB()");
		}
	}]);

	return ConcreteProcess;
})(Process);

new ConcreteProcess().start();