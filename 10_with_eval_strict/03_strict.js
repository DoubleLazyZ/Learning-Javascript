//es5提出嚴格模式
// 限制JS的模式，使程式脫離了sloppy模式
// 123.message = "wwww" // 原本這樣寫可以。 
// 支持嚴格模式的瀏覽器檢測到有嚴格模式時，會以更加嚴格的方式進行檢查和執行。


// 通過拋出錯誤消除silent錯誤
// JS引擎可以執行程式來進行更多的最佳化(不用對一些錯誤的寫法進行處理)
// 禁用ECMAScript未來版本中可能定義的語法
// 保留字class/let/const
// 關鍵字function/var/new
"use strict"

message = "Hello World";
console.log(message);

true.foo = "abc"

// webpack/vue/rollup 幫我們打包好了

function foo() {
  "use strict"
  true.foo = "abc"
}

foo();