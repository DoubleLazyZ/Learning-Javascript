const newPromise = new Promise((resolve, reject) => {

});


// 如果resolve傳入的是一個promise，則狀態會由新的promise決定 pending, resolve, reject
// 傳入promise
// new Promise((resolve, reject) => {
//   resolve(newPromise)
// })
//   .then((res) => {
//     console.log(res)
//   }, (err) => {
//     console.log(err)
//   })



// 傳入一個obj,並且物件有實現then方法(thenable介面)，則狀態交給obj的then方法來控制
new Promise((resolve, reject) => {
  const obj = {
    then: function (resolve, reject) {
      resolve("resolve message")
    }
  }
  resolve(obj)
})
  .then((res) => {
    console.log(res)
  }, (err) => {
    console.log(err)
  })



// eatable/runable
const obj = {
  eat: function() {

  },
  run: function() {

  }
}