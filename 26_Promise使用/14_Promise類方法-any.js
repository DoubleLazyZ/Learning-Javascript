// es12 (es2021)中新增的API Promise.any
// 所有的Promise都有結果，無論是fulfilled或者是reject時，才有最新狀況
// 這個Promise的結果一定是fulfilled的
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("reject")
  }, 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(22222)
  }, 2000)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(()=> {
    resolve(3333)
  }, 3000)
})

// any方法是一定要等到一個fulfilled
// reject(new AggregateError([])
// 全部都拒絕才catch
Promise.any([p1, p2, p3])
  .then(res=> {
    console.log(res)
  })
  .catch(err => {
    console.log(err.errors)
  })