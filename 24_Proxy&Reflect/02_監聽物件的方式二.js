const obj = {
  name: "wyatt",
  age: 23
}

const objProxy = new Proxy(obj, {
  get: function(target, key) {
    console.log(`監聽到物件${key}屬性被訪問了`, target);
    return target[key]
  },

  set: function(target, key, newValue) {
    console.log(`監聽到${target}物件的${key}屬性被設置`, target);
    target[key] = newValue;
  }
})

console.log(objProxy.name);
console.log(objProxy.age);


obj.name = "Wayne";
console.log(obj.age);
