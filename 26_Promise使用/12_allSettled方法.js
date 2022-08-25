// es11 (es2020)中新增的API Promise.allSettled
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


Promise.allSettled([p1, p2, p3])
  .then(res => {
    console.log(res)
  }).catch(err => {
    console.log("never arrived")
})