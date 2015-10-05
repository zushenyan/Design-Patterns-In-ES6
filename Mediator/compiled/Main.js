"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _Controller = require("./Controller");

var SearchButton = (function () {
	function SearchButton(mediator) {
		_classCallCheck(this, SearchButton);

		this._mediator = mediator;
	}

	_createClass(SearchButton, [{
		key: "disableButton",
		value: function disableButton() {
			console.log("SearchButton is disabled.");
		}
	}, {
		key: "click",
		value: function click() {
			this._mediator.search();
		}
	}]);

	return SearchButton;
})();

var UploadButton = (function () {
	function UploadButton(mediator) {
		_classCallCheck(this, UploadButton);

		this._mediator = mediator;
	}

	_createClass(UploadButton, [{
		key: "disableButton",
		value: function disableButton() {
			console.log("UploadButton is disabled.");
		}
	}, {
		key: "click",
		value: function click() {
			this._mediator.upload();
		}
	}]);

	return UploadButton;
})();

var LoadMoreButton = (function () {
	function LoadMoreButton(mediator) {
		_classCallCheck(this, LoadMoreButton);

		this._mediator = mediator;
	}

	_createClass(LoadMoreButton, [{
		key: "disableButton",
		value: function disableButton() {
			console.log("LoadMoreButton is disabled.");
		}
	}, {
		key: "click",
		value: function click() {
			this._mediator.loadMore();
		}
	}]);

	return LoadMoreButton;
})();

var controller = new _Controller.Controller();
var searchButton = new SearchButton(controller);
var uploadButton = new UploadButton(controller);
var loadMoreButton = new LoadMoreButton(controller);

controller.registerSearchButton(searchButton);
controller.registerUploadButton(uploadButton);
controller.registerLoadMoreButton(loadMoreButton);

searchButton.click();
uploadButton.click();
loadMoreButton.click();