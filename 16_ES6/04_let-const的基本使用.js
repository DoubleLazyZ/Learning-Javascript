// var foo = "foo"

// let bar = "bar"

// // const constant(常量/衡量)
// const name = "abc"
// name = "cba"

// // const本質上是傳遞的值不可以修改
// // 但是如果傳遞的是一個引用類型(內存地址)，可以通過引用找到對應的物件，去修改對象內部的屬性這個是可以的。


// const obj = {
//   foo: "foo"
// }

// // obj = {}
// obj.foo = "aaa"
// console.log(obj.foo)



// 注意事項二: 通過let/const 定義的變量名不可以重複定義

// var foo = "abc"
// var foo = "cba"

let foo = "abc"
let foo = "cba"
console.log(foo)
// SyntaxError: Identifier 'foo' has already been declared

