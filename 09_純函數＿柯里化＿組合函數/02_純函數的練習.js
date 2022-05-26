// foo 函數是不是一個純函數？
// 1.相同的輸入一定產生相同的輸出
// 2.在執行相同的過程中不會產生任何的副作用

function foo(num1, num2) {
  return num1 * 2 + num2 * num2
}

// bar不是一個純函數， 因為他修改了外界的變量。
var name = 'aaa'
function bar() {
  console.log('執行code影響到外部變數')
  name = 'cba'
}

bar()
console.log(name)

// baz也不是一個純函數
function baz(info) {
  info.age = 100
}

var obj = { name: 'why', age: 18 }
baz(obj)
console.log(obj)

// test是一個純函數
var obj2 = { name: 'why', age: 18 }
function test(info) {
  return {
    ...info,
    age: 100,
  }
}

var testRes = test(obj2)
console.log(testRes)

// React的函數組件（類組件）
function HelloWorld(props) {}
