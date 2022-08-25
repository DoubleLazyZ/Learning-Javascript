// const promise = new Promise();
// promise.then()
// // 這個是物件方法，相當於是Promise.prototype.then
//
// Promise.all()
// class Promise {
//   static  all() {
//
//   }
// }
// // 這個是類的方法

// 1. 同一個promise可以被多次呼叫then方法
// const promise = new Promise((resolve, reject) => {
//   resolve("resolve")
// })
// promise.then(res => {
//   console.log(res)
// })
// promise.then(res => {
//   console.log(res)
// })


// 2.then方法可以傳入 回呼函數 可以有返回值
// then方法本身也有返回值。他的返回值是promise


// 01. 如果我們返回是一個普通值。那麼這個普通的值會作為一個新的promise的resolve值
// 所以第二次的then是對第一次then返回的promise的then方法
// 如果沒有返回值，返回undefined
// promise.then(res => {
//   return "foo"
// }).then(res => {
//   console.log("res:", res) // foo
//   return "bar"
// })


// 02. 如果返回值是一個promise的話
const promise = new Promise((resolve, reject) => {
  resolve("resolve")
})

promise.then(res => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo")
    }, 3000)
  })
})
  .then(res => {
    console.log(res) // foo
  })


// 3. 如果返回是一個物件，並且物實現了thenable
promise.then(res => {
  return {
    then: function(resolve, reject) {
      resolve("foo")
    }
  }
}).then(res => {
  console.log(res) // foo
})