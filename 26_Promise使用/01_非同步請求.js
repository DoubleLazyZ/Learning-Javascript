// function requestData() {
//   setTimeout(() => {
//
//   }, 3000)
// }
//
//
// const result = requestData(); // 根本拿不到，所以使用callback


function requestData(url, successCallback, failureCallback) {
  setTimeout(() => {
    const name = "get data"
    successCallback(name)

  }, 3000)
}

requestData("test", (res) => {

}, (err) => {

})