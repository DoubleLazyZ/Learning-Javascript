// 函數獨立調用
// 1.例子一
// function foo() {
//   console.log(this)
// }

// foo()


// 2.例子二
// function foo1() {
//   console.log(this)
// }

// function foo2() {
//   console.log(this)
//   foo1()
// }

// function foo3() {
//   console.log(this)
//   foo2()
// }

// foo3()



// 3.例子三
// var obj = {
//   name: 'Kuang',
//   foo: function() {
//     console.log(this);
//   }
// }

// var bar = obj.foo
// bar() //window
// 這裡的bar是獨立函數調用，所以this也是window
// 調用的時候有沒有主題，跟所在的位置沒有關係。


// 4.例子四
// function foo() {
//   console.log(this)
// }

// var obj = {
//   name: 'kuang',
//   foo: foo
// }

// var bar = obj.foo
// bar() //window


// 5.例子五
function foo() {
  function bar() {
    console.log(this)
  }
  return bar
}

var fn = foo()
fn() // window

var obj = {
  name: 'kuang',
  eating: fn
}

obj.eating() // 隱式綁定