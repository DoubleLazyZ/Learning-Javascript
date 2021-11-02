// function foo() {
//   console.log(this)
// }

// 獨立函數調用
// foo()

// 1.案例一
// var obj = {
//   name: 'kuang',
//   foo: foo
// }

// obj.foo() // obj對象


// 2.案例二:
// var obj = {
//   name: 'kuang',
//   eating: function() {
//     console.log(this.name + '在吃東西')
//   },
//   running: function() {
//     console.log(obj.name + "在跑步")
//   }
// }

// // obj.eating()
// // obj.running()

// var fn = obj.eating
// fn()
// 瀏覽器裡面是window，輸出結果: 在吃東西
// Node中的結果:undefined在吃東西

// 3.案例三

var obj1 = {
  name: "obj1",
  foo: function() {
    console.log(this)
  }
}

var obj2 = {
  name : "obj2",
  bar: obj1.foo
}

obj2.bar()