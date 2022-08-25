let url = "fail"
function requestData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(url === "success") {
        resolve("請求成功")
      } else {
        reject("請求失敗")
      }
    }, 3000)
  })
}


const promise  = requestData()
promise.then(() => {
  console.log("ok")
}).catch(() => {
  console.log("fail")
})