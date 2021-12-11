// 1.||= 邏輯或賦值運算
// // let message = ''
// // let message = undefined
// let message = 0
// // message = message || 'default value'
// message ||= 'default value'
// console.log(message)

// 2.&&=
// const obj = {
//   name: 'wyatt',
//   foo: function () {
//     console.log('函數被調用')
//   },
// }
// obj.foo && obj.foo()

let info = {
  name: 'wyatt',
}

// 1.判斷info有沒有值
// 2.有值的情況下，取出info.name
// info = info && info.name
info &&= info.name
console.log(info)

// 3.??=
let message = ''
message ??= 'default value'
console.log(message)

// Numeric Separator: 講過了
// String.replaceAll 字符串替換