// es9 2018新增的 不論是否倍resolve或者reject都會觸發
const promise = new Promise((resolve, reject) => {
  resolve("resolve message")
})

promise.then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
}).finally(() => {
  console.log("finallu code execute")
})