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
// Student.prototype = Object.create(Person.prototype)
// Object.defineProperty(Student.prototype, "constructor", {
//   enumerable: false,
//   configurable: true,
//   writable: true,
//   value: Student
// })

Student.prototype.studying = function() {
  console.log("studying")
}

var stu = new Student("wyatt", 24, ["Red"], 1053899)
console.log(stu)
stu.studying()
stu.running()
stu.eating()
console.log(stu.constructor)
console.log(stu.constructor.name)
