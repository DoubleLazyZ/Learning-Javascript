// 傳統的物件導向的多態有三個前提
// 1.必須要有繼承(是多態的前提)
// 2.必須要有重寫(子類重寫父類的方法)
// 3.必須有父類引用指向子類對象 var shape:Shape = new Rectangle()

class Shape {
  getArea() {}
}

class Rectangle extends Shape {
  getArea() {
    return 100
  }
}

class Circle extends Shape {
  getArea() {
    return 200
  }
}


var r = new Rectangle()
var c = new Circle()

// 多態:當不同的數據類型執行同一個操作時， 如果表現出來的行為(型態)不一樣， 那就是多態的體現。
function calcArea(shape: Shape) {
  console.log(shape.getArea())
}

calcArea(r)
calcArea(c)