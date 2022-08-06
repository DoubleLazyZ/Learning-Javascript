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

var p = new Person();
Student.prototype = p
// Student.prototype = Person.prototype; //錯誤的，會影響到創建的實例

Student.prototype.studying = function() {
  console.log(this.name + " is studying.")
}

var stu = new Student("wyatt", 24, ["Red"])
stu.eating()


// 原型鏈繼承方法的弊端都被解決了
// 1. 問題一：列出stu物件，.某些屬性是看不到的
console.log(stu) // Person { name: 'wyatt', age: 24, friends: 'Red', sno: 1234 }

// 2. 問題二：創建出兩個stu物件
var stu1 = new Student("wyatt", 24, ["Red"])
var stu2= new Student("zz", 25, ["Red"])

stu1.friends.push("wayne"); // 竟然相互影響了，因為兩個找到的都是往實例P物件新增friends
console.log(stu1.friends); // [ 'Red', 'wayne' ]
console.log(stu2.friends); // [ 'Red' ]

// 3. 問題三：在實現類的過程中都沒有傳遞參數
var stu3 = new Student("Red", 27, ["Wyatt", "Wayne"], 323)
// 已經傳參數


// -------------------------借用構造函數的弊端------------------
// 借用構造函數的弊端
// 1.Person函數至少被調用了兩次
// Person.call(this, name, age, friends, sno)
// var p = new Person();

// 2.給子類的原型物件上多出了一些屬性，但是這些屬性是沒有存在的必要。
// var p = new Person();
// p裡面會有 {name: undefined, age: undefined, friends: undefined}
