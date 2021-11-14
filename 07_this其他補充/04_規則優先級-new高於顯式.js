// 結論: new 關鍵字不能和apply/call一起來使用


// new的優先級高於bind
function foo() {
  console.log(this)
}


var bar = foo.bind("aaa");

var obj = new bar()

// new綁定 > 顯示綁定(apply/call/bind) > 隱式綁定(obj.foo()) > 默認綁定(獨立函數調用)