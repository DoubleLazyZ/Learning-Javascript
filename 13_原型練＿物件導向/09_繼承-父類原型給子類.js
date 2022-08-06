// 解決方法:Constructor stealing 借用構造函數

// 父類： 共有的屬性和方法
function Person(name, age, friends) {
  // 這裏this變成stu
  this.name = name
  this.age = age
  this.friends = friends
}

// 往父類原型添加方法
Person.prototype.eating = function() {
  console.log(this.name + " is eating")
}

// 子類： 特有的屬性和方法
function Student(name, age, friends, sno) {
  Person.call(this, name, age, friends, sno) // 當一個Student被創建的時候，順便創建一個Person相當於new Person
  this.sno =  1234
}

// var p = new Person();
// Student.prototype = p
// 直接將父類的原型賦值子類的原型
// 給子類加方法，不應該加在父類
// 而且另外一個物件繼承自Person的話也會拿到創建的方法
Student.prototype = Person.prototype; //錯誤的，會影響到新創建的實例

Student.prototype.studying = function() {
  console.log(this.name + " is studying.")
}

var stu = new Student("wyatt", 24, ["Red"])
stu.eating()


