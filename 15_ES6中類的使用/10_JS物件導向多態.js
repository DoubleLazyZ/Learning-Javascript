function calcArea() {

}

var obj1 = {
  name: "wyatt",
  getArea: function() {
    return 1000
  }
}

class Person {
  getArea() {
    return 100
  }
}

// 也是多態
var p = new Person()

calcArea(obj1)
calcArea(p)

function sum(m, n) {
  return m + n
}

sum(20, 30)
sum("a", "b")