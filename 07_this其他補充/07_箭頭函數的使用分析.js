// 1. 箭頭函數
// 1> (): 參數
// 2> =>: 箭頭函數
// 3> {}: 函數的執行體，函數執行的地方
var foo = (num1, num2, num3) => {
  console.log(num1 , num2, num3)
}

function bar(num1, num2, num3) {

}


// 高階函數在使用時，也可以傳入箭頭函數
var nums = [10, 20, 30, 49];
nums.forEach((item, index, arr) => {})

// 箭頭函數常見的簡寫
// 簡寫一: 如果參數只有一個, 參數()可以省略
nums.forEach( item => {
  console.log(item)
})

// 簡寫二: 函數執行體只有一行程式，那麼{}也可以省略
// 強調: 並且他會默認將這行程式的執行結果作為返回值
nums.forEach(item => console.log(item))
var newNumbers = nums.filter(item => item % 2 === 0)
console.log(newNumbers)


// filter/map/reduce
var results = nums.filter(item => item % 2 === 0)
                  .map(item => item * 100)
                  .reduce((preValue, item) => preValue + item)
console.log(results)


// 簡寫三: 如果一個箭頭函數， 只有一行程式， 被且返回一個物件
var bar = () => { 
  return { name: "why", age: 23 }
}

var bar = () => ({ name: "why", age: 23 })