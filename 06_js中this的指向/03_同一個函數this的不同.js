// this指向什麼，跟函數所處的位置是沒有關係的
// 跟調用位置與調用方式有關係

function foo() {
  console.log(this)
}

// 1.直接調用這個函數
foo() // Window

// 2.創建一個對象， 對象中的函數指向foo
var obj = {
  name: 'Wyatt',
  foo: foo
} // Object obj

obj.foo()

// 3.apply來調用
foo.apply("abc")
// String 0: "a", "b", "c", "d"