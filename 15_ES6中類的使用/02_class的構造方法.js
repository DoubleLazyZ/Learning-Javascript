class Person {
  // 類的構造方法
  // 一個類只能有一個構造函數
  // 1.在記憶體中創建一個物件
  // 2.將類的原型prototype賦值給創建出來的物件
  // 3.將物件賦值給函數的this: new綁定this
  // 4.執行函數體中的程式
  // 5.自動返回創建出來的物件
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

var p1 = new Person("wyatt");
var p2 = new Person("Wayne");