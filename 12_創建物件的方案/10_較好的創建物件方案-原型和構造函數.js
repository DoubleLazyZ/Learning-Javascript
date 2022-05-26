function Person(name, age, height, address) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.address = address;

  // 不能這樣寫
  // Person.prototype.name = name
  // Person.prototype.age = age
  // Person.prototype.height = height
  // Person.prototype.address = address
}

Person.prototype.eating = function() {
  console.log(this.name + "在吃食物")
}

Person.prototype.running = function() {
  console.log(this.name + "在跑步")
}
var p1 = new Person("wyatt", 24, 1.65, "台北")
var p2 = new Person("Wayne", 18, 1.54, "彰化")