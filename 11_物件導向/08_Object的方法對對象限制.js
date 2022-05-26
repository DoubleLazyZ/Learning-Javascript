var obj = {
  name: "wyatt",
  age: 24
}

// 1.禁止物件繼續添加新屬性
Object.preventExtensions(obj)

obj.height = 1.65;
obj.address = '宜蘭';

// 2.禁止物件配置/刪除裡面的屬性
for (var key in obj) {
  Object.defineProperty(obj, key, {
    configurable: false,
    enumerable: true,
    writable: true,
    value: obj[key]
  })
}

// Object.seal(obj)

// delete obj.name;
console.log(obj.name)

// 3.讓屬性不可以修改(writable: false)
Object.freeze(obj)

obj.name = "wayne";
console.log(obj)