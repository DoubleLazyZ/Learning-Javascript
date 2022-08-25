function foo() {
  const obj = {name: "wyatt"};
  return new Promise((resolve) => {
    resolve(obj)
  })
}

foo().then(res => {
  console.log(res);
})


// 類方法
const promise = Promise.resolve({name: "wyatt"});
// 相當於
const promise2 = new Promise((resolve, reject) => {
  resolve({name: "wyatt"})
})

promise.then(res => {
  console.log("res", res)
})