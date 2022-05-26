function createPerson(name, age, height, address) {
  var p = {}
  p.name = name
  p.age = age
  p.height = height;
  p.address = address;

  p.eating = function() {
    console.log(this.name + "在吃東西")
  }

  return p
}

var p1 = createPerson("Wyatt", 24, 165, "彰化")
var p2 = createPerson("Wayne", 26, 160, "台北")

console.log(p1, p2)