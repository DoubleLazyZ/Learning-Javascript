const obj = {
  _name: "wyatt",
  get name() {
    return this._name;
  },
  set name(newValue) {
    this._name = newValue;
  }
}

// obj.name = "wyatt";
// console.log(obj.name);

const objProxy = new Proxy(obj, {
  get: function(target, key, receiver) {
    console.log('get方法被訪問兩次', target, key, receiver);
    // receiver是創建出來的代理物件
    return Reflect.get(target, key, receiver); // receiver可以改變物件的this,變成說當我們去訪問代理物件的_name時就會再經過這裡的get方法。
  },
  set: function(target, key, newValue, receiver) {
    console.log('set方法被調用')
    Reflect.set(target, key, newValue, receiver);
  }
})

// objProxy.name = "wyatt";
console.log(objProxy.name);