/*
	Builder pattern unlike Factory pattern which wants to create things via polymorphism,
	it solves telescoping constructor problem via a builder through step-by-step set up.
*/

/*
	our Laptop needs to have
	* screen size
	* memory
	* case
	for options.
*/

"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LaptopBuilder = (function () {
	function LaptopBuilder() {
		_classCallCheck(this, LaptopBuilder);

		this._laptop = {};
	}

	_createClass(LaptopBuilder, [{
		key: "setScreenSize",
		value: function setScreenSize(screenSize) {
			this._laptop["ScreenSize"] = screenSize;
		}
	}, {
		key: "setMemory",
		value: function setMemory(memory) {
			this._laptop["Memory"] = memory;
		}
	}, {
		key: "setCaseStyle",
		value: function setCaseStyle(caseStyle) {
			this._laptop["CaseStyle"] = caseStyle;
		}
	}, {
		key: "getResult",
		value: function getResult() {
			return this._laptop;
		}
	}]);

	return LaptopBuilder;
})();

var builder = new LaptopBuilder();
builder.setScreenSize("14 inch");
builder.setMemory("4 GB");
builder.setCaseStyle("Rainbow Case");
console.log(builder.getResult());