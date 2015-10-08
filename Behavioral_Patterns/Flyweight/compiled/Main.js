/*
	If you try to reduce memory usage by centralizing data to a place, it's technically a Flyweight pattern.
	The main spirit of this pattern is resource sharing. Making duplicated datas to minimal as possible.
*/

"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Image = (function () {
	function Image(content) {
		_classCallCheck(this, Image);

		this._content = content;
	}

	_createClass(Image, [{
		key: "getContent",
		value: function getContent() {
			return this._content;
		}
	}]);

	return Image;
})();

var ImageFile = (function () {
	function ImageFile(fileName, image) {
		_classCallCheck(this, ImageFile);

		this._fileName = fileName;
		this._image = image;
	}

	_createClass(ImageFile, [{
		key: "info",
		value: function info() {
			console.log("File Name: " + this._fileName + ", Content: " + this._image.getContent());
		}
	}]);

	return ImageFile;
})();

var ImageFileFactory = (function () {
	function ImageFileFactory() {
		_classCallCheck(this, ImageFileFactory);

		this._cached = {};
		this._imageCreated = 0;
	}

	// you can have diffrent files, but image should be the same.

	_createClass(ImageFileFactory, [{
		key: "createImageFile",
		value: function createImageFile(fileName, content) {
			var image = this._cached[content];
			if (!image) {
				image = new Image(content);
				this._cached[content] = image;
				this._imageCreated++;
			}
			return new ImageFile(fileName, image);
		}
	}, {
		key: "getImageCreated",
		value: function getImageCreated() {
			return this._imageCreated;
		}
	}]);

	return ImageFileFactory;
})();

var factory = new ImageFileFactory();

factory.createImageFile("cat_standing", "A cat standing on the floor");
factory.createImageFile("cat_stands", "A cat standing on the floor");
factory.createImageFile("cat_stand", "A cat standing on the floor");
factory.createImageFile("dog_sit", "A dog sits here");
factory.createImageFile("dog_sitting", "A dog sits here");
factory.createImageFile("man", "A man is running");
factory.createImageFile("man_running", "A man is running");

console.log(factory.getImageCreated());