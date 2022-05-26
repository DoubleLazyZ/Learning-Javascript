var obj = {
  _age: 18,
  _eating: function() {},
  get age() {
    return this._age
  },
  set age(value) {
    this._age = value
  }
}

Object.defineProperties(obj, {
  name: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "wyatt"
  },
  age : {
    configurable: true,
    enumerable: true,
    get: function() {
      return this._age
    },
    set: function(value) {
      this._age = value
    }
  }
})


// 獲取某一個特定屬性的描述符號
console.log(Object.getOwnPropertyDescriptor(obj, 'age'))
// {
//   get: [Function: get],
//   set: [Function: set],
//   enumerable: true,
//   configurable: true
// }

// 獲取對象所有屬性的描述符號
console.log(Object.getOwnPropertyDescriptors(obj))