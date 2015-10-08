"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Observable = (function () {
	function Observable() {
		_classCallCheck(this, Observable);

		this._observertList = [];
	}

	_createClass(Observable, [{
		key: "addObserver",
		value: function addObserver(observer) {
			this._observertList.push(observer);
		}
	}, {
		key: "removeObserver",
		value: function removeObserver(obsever) {
			this._observertList.splice(this._observertList.indexOf(observer), 1);
		}
	}, {
		key: "notifyObservers",
		value: function notifyObservers(data) {
			for (var i = 0; i < this._observertList.length; i++) {
				this._observertList[i].update(data);
			}
		}
	}]);

	return Observable;
})();

exports.Observable = Observable;