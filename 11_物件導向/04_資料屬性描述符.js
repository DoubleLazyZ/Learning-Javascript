// 通過字面量創建的屬性，雖然沒有透過屬性描述符定義，但也會具備特性並且除了value的值不一樣外
// 其他的configurable, enumerable, writable 都是true
var obj = {
  name: 'wyatt',
  age: 24
}

// 使用屬性描述符, 會有默認的特性
Object.defineProperty(obj, "address", {
  value: "松山區", // 默認值是undefined
  // 該特性不可以刪除/也不可以重新定義屬性描述符號
  configurable: false, // 默認值false
  // 該特性是配置obj對應的屬性是否可以枚舉(取得)
  enumerable: false, // 默認值false
  // 該特性是屬性使否是可以賦值(寫入值)
  writable: false, // 默認值false
})

// 測試configurable
// delete obj.name
// console.log(obj)

// delete obj.address
// console.log(obj.address) // 松山區
// // 因此不可以刪除


// 測試enumerable
// console.log(obj)
// for(var key in obj) {
//   console.log(key)
// }
// console.log(Object.keys(obj));


// 測試writable的做用
obj.address = '彰化';
console.log(obj.address) // 會報錯
