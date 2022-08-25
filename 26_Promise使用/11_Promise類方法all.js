const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(111)
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
// aaa也會被轉成new Promise()通過resolve處理
// 所有Promise都變成fulfilled時，再拿到結果
// 如果有一個promise拿到rejected,那麼整個promise是rejected
Promise.all([p1, p2, p3, "aaa"]).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
