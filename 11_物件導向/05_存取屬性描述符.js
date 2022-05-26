var obj = {
  name: "wyatt",
  age: 24,
  _address: "松山區"
}

// 存取屬性描述符號
// 1. 隱藏某一個私有屬性, 不希望直接被外界使用和賦值
// 2. 如果希望截獲某一個屬性他的訪問和設置的過程時, 也會使用屬性描述符
Object.defineProperty(obj, "address", {
  enumerable: true,
  configurable: true,
  get: function() {
    foo()
    return this._address
  },
  set: function(value) {
    bar()
    this._address = value
  }
})

console.log(obj.address)

obj.address = "台北市"

function foo() {
  console.log("獲取了address的值")
}

function bar() {
  console.log("set address value")
}