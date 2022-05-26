//  給所有的函數添加一個wyCall的方法
// restParameters
Function.prototype.wyCall = function(thisArg, ...args) {
  console.log('wyCall被調用')
  // 執行調用的函數
  // 獲取到哪一個函數執行了wyCall
  // 1.獲取需要被執行的函數
  var fn = this;

  // 2.對thisArg轉換成對象類型(防止他傳入的是非對象類型)
  thisArg = thisArg ? Object(thisArg) : window

  // 3.調用需要被執行的函數
  thisArg.fn = fn
  var result = thisArg.fn(...args)
  delete thisArg.fn

  // 4.將最終的結果返回回去
  return result
}

function foo() {
  console.log("foo函數被調用", this)
}

function sum(num1, num2) {
  console.log("sum函數被調用", this)
  return num1 + num2
}

foo.call("abc")
var result = sum.call({}, 20, 30)
console.log("系統call結果", result)

foo.wyCall({name: "wyatt"})
var result2 = sum.wyCall({}, 20, 30)
console.log("wyCall結果", result2)

