// 空值合併運算符??

// let foo = undefined
// let foo = null
// 空字串和0沒辦法取得
// let foo = ''
let foo = 0
let bar = foo || 'default value' //default value
let baz = foo ?? 'default value' //0
console.log(bar)
console.log(baz)
