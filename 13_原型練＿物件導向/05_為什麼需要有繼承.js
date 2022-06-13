// Student
function Student(name, age, sno) {
  this.name = name;
  this.age = age;
  this.title = sno;
}

Student.prototype.running = function() {
  console.log(this.name + "is running.")
}

Student.prototype.studying = function() {
  console.log(this.name + "is studying.")
}

// Teacher

function Teacher(name, age, title) {
  this.name = name;
  this.age = age;
  this.title = title;
}

Teacher.prototype.running = function() {
  console.log(this.name + "is running.")
}

Teacher.prototype.teaching = function() {
  console.log(this.name + "is teaching.")
}

// 可以把共用的方法抽取出來到父類
