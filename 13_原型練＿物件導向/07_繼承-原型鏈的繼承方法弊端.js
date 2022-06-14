// 父類： 共有的屬性和方法
function Person(name, age, friends) {
  // this.name = "DoubleZ"
  // this.age = 23
  // this.friends = []
  this.name = name
  this.age = age
  this.friends = friends
  this.sno = sno
}

Person.prototype.eating = function() {
  console.log(this.name + " is eating")
}

// 子類： 特有的屬性和方法
function Student(name, age, friends, sno) {
  Person.call(this, name, age, friends, sno)
  this.sno =  1234
}

var p = new Person();
Student.prototype = p

Student.prototype.studying = function() {
  console.log(this.name + " is studying.")
}

var stu = new Student()
console.log(stu.name)
console.log(stu.studying)
stu.eating()

// 原型鏈繼承方法的弊端
// 1. 問題一：列出stu物件，繼承的屬性是看不到的
console.log(stu.name)

// 2. 問題二：創建出兩個stu物件
var stu1 = new Student()
var stu2= new Student()

stu1.friends.push("wayne");
stu1.friends = ["Wayne", "Red"]
stu.name = "wyatt" //不會影響

console.log(stu1.friends);
console.log(stu2.friends);

// 3. 問題三：在實現類的過程中都沒有傳遞參數
var stu3 = new Student("Red", 27, ["Wyatt", "Wayne"], 323)

// 解決方法:Constructor stealing 借用構造函數


// 借用構造函數的弊端
// 1.Person函數至少被調用了兩次
// 2.stu物件上對出了一些屬性，但是這些屬性是沒有存在的必要。