// const promise = new Promise((resolve, reject) => {
//   // reject("reject status")
//   throw new Error("reject status")
// })

// 1.當executor拋出異常的時候，也是會呼叫錯誤捕獲的回呼函數
// promise.then(undefined, (err) => {
//   console.log(err)
// })

// 2.通過catch方法傳入reject捕獲的回呼函數
// 這種寫法不符合 promise/a+規範
// promise.catch(err => {
//   console.log(err)
// })
//
// // 這裡的catch是會當成第一個promise的異常捕獲，不是第二個new出來的Promise，不過如果第一個promise沒有reject，就會當作第二的promise的錯誤捕獲。
// promise.then(res => {
//
// }).catch(err => {
//
// })


// 3.拒絕捕獲的過程
// const promise = new Promise((resolve, reject) => {
//   // reject("reject status")
//   throw new Error("reject status")
// })
// // 這裡沒有捕獲錯誤的處理，兩個是獨立的promise
// // catch不是promise的錯誤處理，必須要寫then的第二個回呼函數，或是使用catch。
// promise.then(res => {
//
// })
//
// promise.catch(err => {
//
// })

// 4.catch的返回值
// catch裡面的返回值也是會return new Promise並且resolve返回我們的值
const promise = new Promise((resolve, reject) => {
  reject("foo")
})

promise.then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
  return "catch return value"
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

