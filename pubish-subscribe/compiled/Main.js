"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _PubSub = require("./PubSub");

var Subscriber = (function () {
	function Subscriber(name) {
		_classCallCheck(this, Subscriber);

		this._name = name;
	}

	_createClass(Subscriber, [{
		key: "update",
		value: function update(data) {
			console.log(this._name + " receives: " + data);
		}
	}]);

	return Subscriber;
})();

var p1 = new Subscriber("Person 1");
var p2 = new Subscriber("Person 2");
var p3 = new Subscriber("Person 3");
var p4 = new Subscriber("Person 4");

var pubsub = new _PubSub.PubSub();
pubsub.subscribe("pets", p1.update.bind(p1));
pubsub.subscribe("pets", p2.update.bind(p2));
pubsub.subscribe("cooking", p3.update.bind(p3));
pubsub.subscribe("games", p4.update.bind(p4));

pubsub.subscribe("games", p1.update.bind(p1));
pubsub.subscribe("cooking", p2.update.bind(p2));

pubsub.publish("pets", "Come and grab a cat today!");
pubsub.publish("cooking", "Make an hamburger in 10 seconds!");
pubsub.publish("games", "Spacecraft out?");