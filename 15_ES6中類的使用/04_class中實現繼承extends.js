class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

class Student extends Person{
  // JS引擎在解析子類的時候有要求，如果我們有實現繼承
  // 那麼子類的構造方法中， 在使用物件之前，要用super呼叫父類的構造方法
  constructor(name, age, sno) {
    super(name, age)
    this.sno = sno
  }
}

var stu = new Student("wyatt", 24);
console.log(stu)