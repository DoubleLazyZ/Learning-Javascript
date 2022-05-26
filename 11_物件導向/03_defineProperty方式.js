var obj = {
  name: "wyatt",
  age: 24,
}

// 屬性描述符號是一個物件
Object.defineProperty(obj, "height", {
  // 配置
  value: 1.65,
})

console.log(obj) 
// {name: 'wyatt', age: 24} 因為enumerable is false
console.log(obj.height); // 1.65 就看得到了

// 屬性描述符號有兩種
// 01. 數據描述符號
// 02. 存取資料描述符號