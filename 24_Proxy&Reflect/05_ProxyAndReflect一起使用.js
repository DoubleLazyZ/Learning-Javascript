const obj = {
  name: "wyatt",
  age: 24
}

const objProxy = new Proxy(obj, {
  get: function(target, key) {
    return Reflect.get(target, key);
  },
  set: function(target, key, newValue) {
    // target[key] = newValue;
    const result = Reflect.set(target, key, newValue); // 多了成功與否可以判斷
  }
})