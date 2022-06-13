// var obj1 = {} // 創建一個物件
// var obj2 = new Object() // 創建一個物件

// function Person() {

// }


// 1. 在記憶體中創建一個物件
// var test = {}
// 2. 綁定this
// this = test
// 3. 將Person函數顯示原型prototype賦值給前面創建出來的物件的隱式原型
// test.__proto__ = Person.prototype
// 4. 執行程式
// 5.回傳新創的物件


var obj = {
  name: "wyatt",
  age: 24
}

obj.prototype = {
  address: "彰化縣"
}

console.log(obj.__proto__) // Object.prototype
console.log(Object.prototype)
console.log(obj.__proto__ === Object.prototype)

console.log(Object) // 本來是一個function,[Function: Object]
// function Object() {} 它的prototype 其實就是 [Object: null prototype] {}
console.log(Object.prototype) // 裡面很多方法
console.log(Object.prototype.constructor) // 裡面很多方法，像是constructor

console.log(Object.getOwnPropertyDescriptors(Object.prototype))


var obj  = {
  name: "wyatt",
  age: 24,
}

var obj2 = {
  address: "彰化"
}

// 任何物件會指向一個Object的原型對象，其__proto__是[Object: null prototype]{}
// 最頂層的物件的原型屬性指向null了，也就是頂層的原型了