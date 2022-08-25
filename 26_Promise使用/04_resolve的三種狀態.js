const promise = new Promise((resolve, reject) => {

})


// promise的狀態
// executor沒有呼叫resolve和reject時，會處在pending狀態
// resolve之後，會變成fulfilled狀態
// reject之後，會變成rejected/unfulfilled狀態
// 狀態改變後就會不會在改變狀態，例如只要resolve後就不能reject，會被忽略，反之亦然。
promise
  .then(
    res =>  {
      console.log(res)
    },
    err => {
      console.log(err)
    }
  )
  .catch(
    err => {
      console.log(err)
    }
  )