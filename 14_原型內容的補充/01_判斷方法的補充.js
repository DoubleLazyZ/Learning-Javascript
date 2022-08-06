var obj = {
  name: "wyatt",
  age: 24
}

var info = Object.create(obj, {
  address: {
    value: "松山區",
    enumerable: true
  }
})

console.log(info);
console.log(info.__proto__)

// 某個屬性是在本身物件上還是在原型
// console.log(info.hasOwnProperty("address"));
// console.log(info.hasOwnProperty("name"));


// in操作符不管是在當前物件還是原型都是true
// console.log("address" in info)
// console.log("name" in info)

// for( let key in info) {
//   console.log(key)
// }