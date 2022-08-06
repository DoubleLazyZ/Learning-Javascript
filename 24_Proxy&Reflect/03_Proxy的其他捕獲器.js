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
  },

  has: function(target, key) {
    console.log(`監聽到物件的${key}屬性in動作`, target);
    return key in target
  },

  deleteProperty: function(target, key) {
    console.log(`監聽到物件的${key}屬性delete動作`, target);
    delete target[key]
  }
})

// in
console.log("name" in objProxy)

// delete

delete objProxy.name

// handler.getPropertyOf
// handler.setPropertyOf
// handler.isExtensible -> Object.preventExtension()
// handler.preventExtensions()
// handler.getOwnPropertyDescriptor()
// handler.defineProperty()
// handler.ownKeys() -> Object.getOwnPropertyNames、Object.getOwnPropertySymbols()
// handler.has()
// handler.get()
// handler.set()
// handler.deleteProperty()

//------------用於函數物件-------------//
// handler.apply()
// handler.constructor


