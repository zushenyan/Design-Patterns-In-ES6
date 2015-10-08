/*
*/

"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function normalHour(rawPrice) {
	return rawPrice;
}

function happyHour(rawPrice) {
	return rawPrice * 0.5;
}

var ShoppingCart = (function () {
	function ShoppingCart() {
		_classCallCheck(this, ShoppingCart);

		this._shoppingList = [];
	}

	_createClass(ShoppingCart, [{
		key: "add",
		value: function add(item) {
			this._shoppingList.push(item);
		}
	}, {
		key: "remove",
		value: function remove(item) {
			var index = this._shoppingList.indexOf(item);
			var result = index ? this._shoppingList.splice(index, 1) : null;
			return result;
		}
	}, {
		key: "bill",
		value: function bill(strategy) {
			var sum = 0;
			this._shoppingList.forEach(function (ele) {
				sum += ele.price;
			});
			return strategy(sum);
		}
	}]);

	return ShoppingCart;
})();

var cart = new ShoppingCart();

cart.add({ name: "food", price: 3.5 });
cart.add({ name: "clock", price: 4.7 });
cart.add({ name: "brush", price: 1.5 });
cart.add({ name: "backpack", price: 17.25 });

console.log(cart.bill(normalHour));
console.log(cart.bill(happyHour));