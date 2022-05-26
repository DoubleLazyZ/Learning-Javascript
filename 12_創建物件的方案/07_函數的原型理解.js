function foo() {
  // var test = {}
  // this = {}

  // this.__proto__ = foo.prototype
}

// 函數也是一個物件
console.log(foo.__proto__) // 函數作為物件來說，它也是有[[prototype]] 隱式原型

// 函數因為他是一個函數，所以他還會多出來一個顯示的原型屬性:prototype
console.log(foo.prototype)

var f1 = new foo()
var f2 = new foo()

// 物件內部的[[prototype]]屬性會被賦值為構造函數的prototype屬性

console.log(f1.__proto__ === foo.prototype)
console.log(f2.__proto__ === foo.prototype)