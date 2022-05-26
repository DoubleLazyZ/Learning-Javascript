function Person(name, age, height, address) {
  this.name = name;
  this.age = age
  this.eating = function() {
    console.log("在吃東西");
  }
}

var person1 = new Person("Wyatt", 24, 1.65, "彰化");
var person2 = new Person("Wayne", 22, 1.70, "台北")
console.log(p1.__proto__.constructor)
console.log(p1.__proto__.constructor.name)

