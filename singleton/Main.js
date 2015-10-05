import {SingletonClass} from "./SingletonClass";

let a = new SingletonClass("this is a");
let b = new SingletonClass("change to b");
console.log(a === b);
console.log(a.getName());
console.log(b.getName());
