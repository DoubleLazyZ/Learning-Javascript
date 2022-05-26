var obj = {
  name: "wyatt",
  age: 24
}

// 屬性描述符
// Object.defineProperty(obj, "height",{
  
// })

// 獲取屬性
console.log(obj.name);

// 給屬性賦值
obj.name = "Wyatt";
console.log(obj);


// 刪除屬性
delete obj.name;
console.log(obj);

// 需求：對屬性進行操作時進行限制
// 限制：不允許某個屬性被賦值/ 不允許某個屬性被刪除 / 不允許某個屬性被遍歷

// 遍歷屬性
for(var key in obj) {
  console.log(key)
}