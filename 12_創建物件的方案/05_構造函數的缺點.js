function foo() {
  function bar() {

  }
  return bar
}


var fn1 = foo();
var fn2 = foo();

console.log(fn1 === fn2) //false

// 同樣得功能卻不斷創造出function，解決的辦法就是原型。