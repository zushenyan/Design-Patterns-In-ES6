/*
	If you have ever write gulp, you must be familiar with this:
	gulp(src("test.js"))
	.pipe(rename("meow.js"))
	.pipe(gulp.dest("./"));
*/

"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Profile = (function () {
	function Profile(name, age, height) {
		_classCallCheck(this, Profile);

		this._name = name;
		this._age = age;
		this._height = height;
	}

	_createClass(Profile, [{
		key: "printProfile",
		value: function printProfile() {
			console.log("name: " + this._name.toString() + "\n" + "age: " + this._age.toString() + "\n" + "height: " + this._height.toString());
		}
	}]);

	return Profile;
})();

var ProfileEditor = (function () {
	function ProfileEditor() {
		_classCallCheck(this, ProfileEditor);

		this._profile = null;
	}

	_createClass(ProfileEditor, [{
		key: "targetProfile",
		value: function targetProfile(profile) {
			this._profile = profile;
			return this;
		}
	}, {
		key: "edit",
		value: function edit(task) {
			for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				args[_key - 1] = arguments[_key];
			}

			task.call.apply(task, [this].concat(args));
			return this;
		}
	}]);

	return ProfileEditor;
})();

function rename(newName) {
	this._profile._name = newName;
}
function addAge() {
	this._profile._age += 1;
};
function changeHeight(newHeight) {
	this._profile._height = newHeight;
};

var profile = new Profile("mark", 20, 6.1);
var pe = new ProfileEditor();
pe.targetProfile(profile).edit(rename, "John").edit(addAge).edit(changeHeight, 6.5);

profile.printProfile();