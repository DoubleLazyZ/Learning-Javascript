var obj = {
  name: "wyatt"
}

// 相當於function Object()創建出來的

// console.log(obj.__proto__ === Object.prototype)

// 物件裡有一個隱式原型物件


// Foo是一個函數，那他會有一個顯式的原型物件: Foo.prototype
// 函數也是一個物件
// var Foo = new Function() 其實就是這樣Foo也是一個物件
// Foo是一個物件那他也會有隱式原型對象
function Foo() {
  
}
console.log(Foo.__proto__)
console.log(Foo.prototype)
console.log(Foo.__proto__ === Foo.prototype) // false
// Foo.prototype 來自哪裡
// 創建了一個函數, Foo.prototype = {constructor: Foo} 自動幫你創建一個新的物件

// Foo.__prototype__ 來自哪裡
// Foo.__proto__ = Function.prototype
// Function.prototype = {constructor: Function}


// Foo是由new Function創建出來的
// 會被構造函數稱作一個類
// function Object() {}
// function Function() {}