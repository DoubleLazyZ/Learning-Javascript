var names = ["Wyatt", "Wayne", "ZZ"]
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age
    this._address = "松山區"
  }

  // 普通的實例方法
  // 創建出來的物件進行呼叫
  eating() {
    console.log(this.name + 'eating!')
  }


  get address() {
    console.log("get")
    return this._address
  }
  
  set address(newAddress) {
    console.log("set")
    this._address = newAddress
  }

  // 可以通過類名呼叫
  static randomPerson() {
    var nameIndex = Math.floor(Math.random() * names.length)
    var name = names[nameIndex]
    var age = Math.floor(Math.random() * 100)
    return new Person(name, age)
  }
}

var p = new Person("wyatt", 24)
p.eating()

console.log(Object.getOwnPropertyDescriptors(Person.prototype))


var obj = {
  _name: "wyatt",
  get name() {
    return this._name
  },
  set name(newValue) {
    this._name = newValue
  }
}

var p2 = Person.randomPerson()
console.log(p2)