/*
	A proxy can be an interface to anything, most of its job can be varied,
	from adding security to network connection, simplifing complex interface,
	to caching files that just loaded.
*/

/**
	@abstract
*/
"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Image = (function () {
	function Image(fileName) {
		_classCallCheck(this, Image);

		if (this.constructor === "Image") {
			throw new Error("Image is an abstract class, shouldn't be instanitated.");
		}
		this._fileName = fileName;
	}

	_createClass(Image, [{
		key: "displayImage",
		value: function displayImage() {
			console.log("displaying " + this._fileName);
		}
	}]);

	return Image;
})();

var RealImage = (function (_Image) {
	_inherits(RealImage, _Image);

	function RealImage(fileName) {
		_classCallCheck(this, RealImage);

		_get(Object.getPrototypeOf(RealImage.prototype), "constructor", this).call(this, fileName);
		this.loadImageFromDisk();
	}

	_createClass(RealImage, [{
		key: "loadImageFromDisk",
		value: function loadImageFromDisk() {
			console.log("loading " + this._fileName + " from disk...");
		}
	}]);

	return RealImage;
})(Image);

var ProxyImage = (function (_Image2) {
	_inherits(ProxyImage, _Image2);

	function ProxyImage(fileName) {
		_classCallCheck(this, ProxyImage);

		_get(Object.getPrototypeOf(ProxyImage.prototype), "constructor", this).call(this, fileName);
		this._image = null;
	}

	_createClass(ProxyImage, [{
		key: "displayImage",
		value: function displayImage() {
			if (!this._image) {
				this._image = new RealImage(this._fileName);
			}
			this._image.displayImage();
		}
	}]);

	return ProxyImage;
})(Image);

var proxyImage = new ProxyImage("proxy_10mb_img.jpg");
var image = new RealImage("10mb_img.jpg");

proxyImage.displayImage();
proxyImage.displayImage();
image.displayImage();
proxyImage.displayImage();