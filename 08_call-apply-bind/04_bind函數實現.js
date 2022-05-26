
Function.prototype.wyBind = function(thisArg, ...argArray) {
  // 1.取得要執行的對象
  let fn = this;

  // 2.綁定的對象, 判斷第一個是否是有沒有值,轉成物件,否則綁定window
  thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window

  function proxyFn(...args) {
    thisArg.fn = fn;
    // 調用函數原來的函數，做參數的處理
    var finalArgs = [...argArray, ...args]
    var result = thisArg.fn(...finalArgs)
    delete thisArg.fn
    return result
  }

  return proxyFn
}

function foo() {
  console.log("foo被執行", this)
}

function sum(num1, num2, num3, num4) {
  console.log(num1, num2, num3, num4)
  return num1 + num2 + num3 + num4
}

// var newSum = sum.bind("aaa", 10, 20 ,30, 40);
// newSum()

// var newSum = sum.bind("aaa", 10)
// newSum(20, 30)

// var bar = foo.wyBind("aaa")
// bar()

var newSum = sum.wyBind("aaa", 10, 20)
newSum(30, 40)