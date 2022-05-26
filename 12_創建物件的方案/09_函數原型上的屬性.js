function foo() {

}

console.log(foo.prototype)
console.log(Object.getOwnPropertyDescriptors(foo.prototype))

Object.defineProperty(foo.prototype, "constructor", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "哈哈哈"
})

console.log(foo.prototype.constructor) // [Function: foo]
console.log(foo.prototype.constructor.name)

// 2.我們也可以添加屬性
foo.prototype.name = "wyatt" 
foo.prototype.age = 24
foo.prototype.height = 1.65
foo.prototype.eating = function() {

}

var f1 = new foo();
console.log(f1.name, f1.age)

// 3.直接修改整個prototype物件
foo.prototype = {
  // constructor: foo,
  name: "wyatt",
  age: 24,
  height: 1.65
}

var f1 = new foo()

console.log(f1.name, f1.age, f1.height)

// 真實開發中我們可以通過Object.defineProperty方式添加constructor
Object.defineProperty(foo.prototype, "constructor", {
  enumerable: false,
  configurable: true,
  writable: true,
  value: foo
})