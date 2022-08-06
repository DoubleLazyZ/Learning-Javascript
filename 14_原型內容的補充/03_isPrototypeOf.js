function createObject(o) {
  function Fn() {}
  Fn.prototype = o;
  return new Fn();
}

function inheritPrototypes(SubType, SuperType) {
  SubType.prototype = Object.create(SuperType.prototype)
  Object.defineProperty(SubType.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: SubType
  })
}

function Person(name, age, friends) {
  this.name = name
  this.age = age
  this.friends = friends
}

Person.prototype.running = function() {
  console.log("running");
}

Person.prototype.eating = function() {
  console.log("eating")
}

function Student(name, age, friends, sno) {
  Person.call(this, name, age, friends)
  this.sno = sno
}

inheritPrototypes(Student, Person)

Student.prototype.studying = function() {
  console.log("studying")
}

var stu = new Student("wyatt", 24, ["Red"], 1053899)

// 判斷原型
// 用於檢測構造函數的prototype，是否出現在某個實例物件的原型鏈上。
console.log(stu instanceof Student)
console.log(stu instanceof Person)
console.log(stu instanceof Object)


console.log(Person.prototype.isPrototypeOf(stu))

// instanceof只能用在構造函數
var obj = {
  name: "wyatt"
}

var info = Object.create(obj);
// console.log(info instanceof obj) -> 錯的，因為obj不是構造函數
console.log(obj.isPrototypeOf(info))