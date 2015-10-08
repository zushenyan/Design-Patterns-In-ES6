"use strict";

var _SingletonClass = require("./SingletonClass");

var a = new _SingletonClass.SingletonClass("this is a");
var b = new _SingletonClass.SingletonClass("change to b");
console.log(a === b);
console.log(a.getName());
console.log(b.getName());