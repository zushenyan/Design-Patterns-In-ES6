/*
	Composite pattern means a group of objects needs to be treated as a single instance of object.
	This compose objects into tree structure to represent part-whole hierachies.
*/

"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = (function () {
	function Node(name) {
		_classCallCheck(this, Node);

		this._children = [];
		this._name = name;
	}

	_createClass(Node, [{
		key: "add",
		value: function add(node) {
			this._children.push(node);
		}
	}, {
		key: "remove",
		value: function remove(node) {
			var index = this._children.indexOf(node);
			var result = index ? this._children.splice(index, 1) : null;
			return result;
		}
	}, {
		key: "print",
		value: function print() {
			console.log("I am node: " + this._name);
			for (var i = 0; i < this._children.length; i++) {
				var child = this._children[i];
				if (child) {
					child.print();
				}
			}
		}
	}]);

	return Node;
})();

var child1 = new Node("child1");
var child2 = new Node("child2");
var child3 = new Node("child3");
var child4 = new Node("child4");

var parent1 = new Node("parent1");
var parent2 = new Node("parent2");

var ancenstor = new Node("ancenstor");

parent1.add(child1);
parent1.add(child2);

parent2.add(child3);
parent2.add(child4);

ancenstor.add(parent1);
ancenstor.add(parent2);

ancenstor.print();