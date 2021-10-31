/*
  ECStack裡面
  GEC(Global execution context 全域執行上下文)
  VO(Variable Object): GO(Global Object)
  執行程式
*/

var name = 'Wyatt'

console.log(num1)

var num1 = 20
var num2 = 30
var result = num1 + num2

/* 
  1.解析程式，v8引擎內部會幫助我們創建一個對象(GlobalObject -> GO)
  2.運行程式: 
    2.1. v8為了執行程式，v8引擎內部會有一個執行上下文棧(Execution Context Stack,ECStack)(函數調用棧)
    2.2. 因為執行的是全局程式，為了全局程式能夠正常執行，需要創建全局執行上下文(Global Execution Context)(全局程式執行才創建)
    變量提升，將變量放入VO裡面，並且給予undefined值
*/

console.log(result)

/* 以下為假的代碼 */
var globalObject = {
  String: '類',
  Date: '類',
  setTimeout: '函數',
  window: globalObject,
  name: undefined,
  num1: undefined,
  num2: undefined,
  result: undefined,
}

console.log(window === window.window.window)
