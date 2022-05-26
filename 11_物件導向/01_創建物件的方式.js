// 1.創建方式一：透過new Object()
var obj = new Object();
obj.name = "wyatt";
obj.age = 24;
obj.height = 1.65;
obj.running = function() {
  console.log(this.name + '在跑步')
}

// 2.創建方式二：字面量
var info = {
  name: "wyatt",
  age: 24,
  height: 1.65,
  running: function() {
    console.log(this.name + '在跑步')
  }
}
