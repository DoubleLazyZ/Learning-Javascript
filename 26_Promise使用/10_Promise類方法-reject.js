const promise = Promise.reject("reject message");

// 相當於
const promise2 = new Promise((resolve, reject) => {
  reject("reject message");
})

promise.then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})