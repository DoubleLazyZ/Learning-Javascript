/*
  ECStack裡面
  GEC(Global execution context 全域執行上下文)
  VO(Variable Object): GO(Global Object)
  執行程式
*/

// var name = 'Wyatt'

/* 函數與變量不一樣 */
foo(123)

function foo(num) {
  // function bar() {
  //   console.log('bar')
  // }
  console.log(m)
  var m = 10
  var n = 15
  console.log(name)
  console.log('foo')
}

var num1 = 20
var num2 = 30
var result = num1 + num2

// var globalObject = {
//   String: '類',
//   Date: '類',
//   setTimeout: '函數',
//   window: globalObject,
//   name: undefined,
//   num1: undefined,
//   num2: undefined,
//   result: undefined,
// }

// var GlobalObject = {
//   String: '類',
//   window: this,
//   name: undefined,
//   foo: 0x100, //引用記憶體地址
// }
