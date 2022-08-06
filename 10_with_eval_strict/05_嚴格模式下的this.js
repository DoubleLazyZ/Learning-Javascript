function foo() {
  console.log(this);
}

foo();

// 嚴格模式下，自執行函數會指向undefined
// 之前寫程式，自執行函數沒有使用過this去引用window
var obj = {
  name: "wyatt"
}

obj.foo();

var bar = obj.foo
bar();

// 嚴格模式下this仍然是window
setTimeout(function() {
  console.log(this)
}, 1000);