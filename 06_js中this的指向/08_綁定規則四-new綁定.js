// 我們通過一個new關鍵字調用一個函數時(構造器), 這個時候this是在調用這個構造器創建出來的物件。
// this = 創建出來的物件
// 這個綁定過程是new 綁定
// var obj = {} 內部會生成一個物件賦值給this

function Person(name, age) {
  this.name = name //{}.name = name
  this.age = age
}

var p1 = new Person('kuang', 22)
console.log(p1.name, p1.age)
var p2 = new Person('kuang2', 22)
console.log(p2.name, p2.age)

var obj = {
  foo: function () {
    console.log(this)
  },
}

new obj.foo()
// new的優先順序高於顯式綁定
