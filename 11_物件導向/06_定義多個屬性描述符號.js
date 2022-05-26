var obj = {
  // 變數前面加下底下是社群裡面大家都那麼用
  // 意味著是私有屬性, 通常不會拿來操作和賦值
  _age: 18,
  _eating: function() {},
  // 也可以寫成這樣, 預設的enumerable和configurable皆為true
  //  使用get和set，enumerable、configuration為true
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
