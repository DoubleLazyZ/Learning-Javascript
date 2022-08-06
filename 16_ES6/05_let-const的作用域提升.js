// console.log(foo)
// var foo = "foo"

// ReferenceError: Cannot access 'foo' before initialization
// foo已經被創建出來，只是不能訪問。
// 在執行上下文會創建詞法環境(lexical environment)，這個時候的VE(以前稱作VO)，已經有let這個變數。
// 可以說在執行上下文創件階段foo就被創建出來了
// let/const他們沒有作用域提升
// 作用域提升: 在聲明變量的作用域中，如果這個變量可以在聲明之前就被訪問，那麼我們可以稱之為作用域提升。

console.log(foo)
let foo = "foo"