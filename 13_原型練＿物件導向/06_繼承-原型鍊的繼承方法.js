// 父類： 共有的屬性和方法
function Person() {
  this.name = "DoubleZ"
}

Person.prototype.eating = function() {
  console.log(this.name + "is eating")
}

// 子類： 特有的屬性和方法
function Student() {
  this.sno =  1234
}

Student.prototype.studying = function() {
  console.log(this.name + "is studying.")
}

var stu = new Student()
console.log(stu.name)
console.log(stu.studying)
console.log(stu.eating())