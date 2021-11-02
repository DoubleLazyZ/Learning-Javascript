// function foo() {
//   console.log("函數被調用")
//   console.log(this)
// }

// foo直接調用和call/apply調用不同在於this的綁定不同
// foo直接調用的指向是全局物件(window)
// foo()

// foo函數上面有call和apply方法

// var obj = {
//   name: "obj"
// }

// call/apply是可以指定this的綁定物件
// foo.call(obj)
// foo.apply(obj)
// foo.apply(obj)

// 2.call和apply區別
function sum(num1, num2, num3) {
  console.log(num1 + num2 + num3, this)
}

sum.call('call', 20, 30, 40)
sum.apply('apply', [20, 30, 40])

// 3.call和apply在執行函數時，是可以明確的綁定this, 這個綁定規則稱作顯示綁定
