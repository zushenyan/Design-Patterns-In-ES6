/*
	Adapter replaces old interface with new one and this happens in scenario like new component doesn't match with the old interface,
	so need to write an adapter to integrate with current structure.
*/

"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Login = (function () {
	function Login() {
		_classCallCheck(this, Login);
	}

	_createClass(Login, [{
		key: "login",
		value: function login(user) {
			console.log("user: " + user + " has logged in");
		}
	}]);

	return Login;
})();

var BetterLogin = (function () {
	function BetterLogin() {
		_classCallCheck(this, BetterLogin);
	}

	_createClass(BetterLogin, [{
		key: "login",
		value: function login(user, credential) {
			if (credential === "1234") {
				console.log("user: " + user + " has logged in");
			} else {
				console.log("login failed");
			}
		}
	}]);

	return BetterLogin;
})();

var LoginAdaper = (function () {
	function LoginAdaper(credential) {
		_classCallCheck(this, LoginAdaper);

		this._credential = credential;
	}

	_createClass(LoginAdaper, [{
		key: "login",
		value: function login(user) {
			new BetterLogin().login(user, this._credential);
		}
	}]);

	return LoginAdaper;
})();

var login = new Login();
var loginAdapter = new LoginAdaper("1234");

login.login("iamacat");
loginAdapter.login("iamacat");