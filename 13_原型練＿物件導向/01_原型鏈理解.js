var obj = {
  name: "wyatt",
  age: 24,
}

// [[get]]操作
// 1. 當前的物件中查找屬性
// 2. 如果沒有找到，這個時候會去原型(__proto__)物件上查找

obj.__proto__ = {
  address: "松山區"
}

// 原型鏈
obj.__proto__.__proto__ = {
  address: "台北市"
}

obj.__proto__.__proto__.__proto__  = {
  address: "彰化縣"
}

console.log(obj.address);