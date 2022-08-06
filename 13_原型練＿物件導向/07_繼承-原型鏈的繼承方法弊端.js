// 父類： 共有的屬性和方法
function Person() {
  this.name = "DoubleZ"
  this.age = 23
  this.friends = []
}

// 往Person的原型加上eating方法
Person.prototype.eating = function() {
  console.log(this.name + " is eating")
}

// 子類： 特有的屬性和方法
function Student() {
  this.sno =  1234
}

// 創建一個Person的實例將它變成Student function的原型
var p = new Person();
Student.prototype = p

// 相當是在創建出來的person實例上新增方法
Student.prototype.studying = function() {
  console.log(this.name + " is studying.")
}

var stu = new Student("wyatt", 24)
console.log(stu.name)
console.log(stu.studying)
stu.eating()


// 原型鏈繼承方法的弊端
// 1. 問題一：列出stu物件，.某些屬性是看不到的
console.log(stu) // Person: {sno: 1234}

// 2. 問題二：創建出兩個stu物件
var stu1 = new Student()
var stu2= new Student()

stu1.friends = "wayne" // 這樣不會影響
stu1.friends.push("wayne"); // 竟然相互影響了，因為兩個找到的都是往實例P物件新增friends
stu1.name = "zz" // 這個不會影響，只會新增在自己的物件上。
console.log(stu1.friends);
console.log(stu2.friends);

// 3. 問題三：在實現類的過程中都沒有傳遞參數
var stu3 = new Student("Red", 27, ["Wyatt", "Wayne"], 323)
// 但是我們在Student函數裡面都沒有參數