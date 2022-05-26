function foo(num1, num2, num3) {
  // 類陣列物件(長得像是一個數組，但其實是一個物件): arguments，ao裡面找得到
  console.log(arguments)

  // 常見的對arguments的操作是三個
  // 1.長度
  console.log(arguments.length)
  // 2.根據索引值獲得指定參數
  console.log(arguments[2])
  console.log(arguments[3])
  console.log(arguments[4])

  // 3.callee獲得當前arguments所在的函數
  console.log(arguments.callee)
  // console.log(num1, num2, num3)
}

foo(10, 20, 30, 40, 50)