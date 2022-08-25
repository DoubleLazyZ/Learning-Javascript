// 很像是下面這種操作
class Person {
  constructor(callback) {
    let foo = function() {

    }

    let bar = function() {

    }

    callback(foo, bar)
  }
}
const p = new Person((resolve, reject) => {

})


// Promise傳入的function又稱executor裡面的兩個參數又是函數。
// resolve => 回呼函數，成功的時候被呼叫
// reject =>  回呼函數，失敗的時候被呼叫

function foo () {
  return new Promise((resolve, reject) => {
    resolve("success")
    // reject("unfulfilled")
  })
}

// then傳入的兩個回呼函數分別是
// 第一個回呼函數會在promise執行resolve函數時被呼叫
// 第二個回呼函數會在promise被執行reject函數的時候被呼叫
const fooPromise = foo()
fooPromise.then((res) => {
  console.log(res)
},(err) => {
  console.log(err)
})

// then方法傳入的回呼函數，會在promise執行的時候被呼叫，接收resolve資料
// catch方法則是接收reject的資料