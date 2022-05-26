function foo(num1, num2) {
  console.log(arguments)
  var newArray = []
  // 不可以使用.forEach, .map
  // 1. 自己遍歷
  for (var i = 0; i < arguments.length; i++) {
    newArray[i] = arguments[i] * 10
  }
  console.log(newArray)

  // 2.2 將array原型的方法綁到arguments上面，
  // 如果不調用this值會是Array.prototype，那樣取不到array like的arguments
  // call會調用slice方法，slice如果不帶參數，會去遍歷array like的值，
  // 會生成一個新的數組並且返回
  var newArr2 = Array.prototype.slice.call(arguments)
  console.log(newArr2)

  // 直接拿[]裡面的slice方法，但使用call綁定到arguments,變成arguments調用
  var newArr3 = [].slice.call(arguments)
  console.log(newArr3)

  // 2.3 ES6語法
  var newArr4 = Array.from(arguments)
  console.log(newArr4)
  var newArr5 = [...arguments]
  console.log(newArr5)
}

// var names = ["aaa", "bbb", "ccc", "ddd"]
// console.log(names.slice(), 'slice')

Array.prototype.wySlice = function(start, end) {
  var arr = this
  start = start || 0
  end = end || arr.length
  var newArray = []
  // 像是這樣子的操作,但其實slice會根據帶入的參數做不同的操作
  for( var i = start; i < end; i++) {
    newArray.push(arr[i])
  }
  return newArray
}
var newArray = Array.prototype.wySlice.call(["aaa", "bbb", "ccc", "ddd"], 1, 3)
console.log(newArray, 32)

foo(10, 20, 30, 40, 50)