// 爭論: 程式樣式規則

var obj1 = {
  name: "obj1",
  foo: function() {
    console.log(this)
  }
}

var obj2 = {
  name: "obj2"
}

// obj2.bar = obj1.foo
// obj2.bar()
// 辭法分析需要加分號
;(obj2.bar = obj1.foo)() //獨立的函數調用(間接的拿到函數)