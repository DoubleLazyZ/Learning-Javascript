function Person() {

}

var p1 = new Person()
var p2 = new Person()

// Person函數物件
// 裡面有函數執行體 + 作用域鏈(父值作用域ParentScope) + prototype指向 Person函數的原型物件

// 創建出來的p1,p2物件都是指向Person函數的原型物件
console.log(p1.__proto__ === Person.prototype) // true
console.log(p2.__proto__ === Person.prototype) // true


// p1.name = "wyatt";
// p1.__proto__.name = "Wayne";
// Person.prototype.name = "LazyWyatt"

console.log(p1.name)