"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PubSub = (function () {
	function PubSub() {
		_classCallCheck(this, PubSub);

		this._topics = {};
	}

	/**
 	@param {string} topic - the topic channel you want to notify.
 	@param {object} msg - the message you want to send in object format.
 	@return {boolean} - return true if publish successfully else false.
 */

	_createClass(PubSub, [{
		key: "publish",
		value: function publish(topic, msg) {
			if (!this._topics[topic]) {
				return false;
			}
			var subscribers = this._topics[topic];
			for (var i = 0; i < subscribers.length; i++) {
				subscribers[i].doSomething(msg);
			}
			return true;
		}

		/**
  	@param {stirng} topic - the topic channel you are interested with.
  	@param {function, object} doSomething - do something when you got notified.
  	@return {symbol} - a unique token for every subscribers. Used for unsubscribing.
  */
	}, {
		key: "subscribe",
		value: function subscribe(topic, doSomething) {
			if (!this._topics[topic]) {
				this._topics[topic] = [];
			}

			var token = Symbol();
			var subscriber = {
				token: token,
				doSomething: doSomething
			};

			this._topics[topic].push(subscriber);
			return token;
		}

		/**
  	@param {string} topic - the topic channel you want to unsubscibe.
  	@param {symbol} token - a unique token for unsubscribing. Should get one from subscribe function.
  	@return {object, boolean} - will return removed object if successed or false if failed.
  */
	}, {
		key: "unsubscribe",
		value: function unsubscribe(topic, token) {
			if (!this._topics[topic]) {
				return false;
			}
			if (this._topics[topic].length === 0) {
				return false;
			}

			var subscribers = this._topics[topic];
			for (var i = 0; i < subscribers.length; i++) {
				if (subscribers[i].token === token) {
					return subscribers.splice(i, 1);
				}
			}
			return false;
		}
	}, {
		key: "hasTopic",
		value: function hasTopic(topic) {
			return this._topics[topic] ? true : false;
		}
	}, {
		key: "availableTopics",
		value: function availableTopics() {
			return Object.keys(this._topics);
		}
	}, {
		key: "subscribers",
		value: function subscribers() {
			var result = [];
			for (var topic in this._topics) {
				if (this._topics[topic]) {
					var channel = {
						topic: topic,
						subscribers: this._topics[topic].length
					};
					result.push(channel);
				}
			}
			return result;
		}
	}]);

	return PubSub;
})();

exports.PubSub = PubSub;