// Douglas Crockford提出prototypal-inheritence

var obj = {
  name: "DoubleZ",
  age: 24,
}

// function createObject(o) {
//   var newObj = {};
//   // 給newObj的原型o
//   Object.setPrototypeOf(newObj, o);

//   return newObj
// }


// function createObject2(o) {
//   function Fn() {}
//   Fn.prototype = o;
//   var newObj = new Fn()
//   return newObj
// }

// var info = createObject(obj)
var info = Object.create(obj)
console.log(info);
console.log(info.__proto__)