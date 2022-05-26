/*
  Javascript的物件中都有一個特殊的屬性[[prototype]]，這個特殊的物件可以指向另一個物件。
  這個屬性可以稱為物件的原型
*/

// 1. 解釋原型以及如何獲取原型
var obj = {name: "wyatt"} // [[prototype]]
var info = {} // [[prototype]]

// 早期的ECMA是沒有規定如何去查看[[prototype]]

// 給物件提供屬性可以查看原型物件
// __proto__
console.log(obj.__proto__)
console.log(info.__proto__)

var obj = {name: "wyatt", __proto__: {} }

// es5之後提供的
console.log(Object.getPrototypeOf(obj))


// 2.原型有什麼作用？
// 當我們從一個物件中獲取一個屬性時，他會觸發[[get]]操作
// 1. 在當前物件中查找屬性，如果找到就直接使用
// 2. 如果沒有找到，那麼就會沿著它的原型去查找[[prototype]]
obj.age = 24
obj.__proto__.age = 24

console.log(obj.age)