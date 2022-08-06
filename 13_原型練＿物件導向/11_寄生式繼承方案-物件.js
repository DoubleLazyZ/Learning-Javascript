// 原型式繼承
var pObj = {
  running: function() {
    console.log("running")
  }
}

// var stuObj = Object.create(pObj)
// 弊端必須要一直重複寫
// stuObj.name = "doubleZ";
// stuObj.running = function() {
// }

// 工廠函數
function createStudent(person, name) {
  var stu = Object.create(person)
  stu.name = name
  stu.studying = function() {
    create.log("studying")
  }
  // 函數createStudent的時候一直創建
  // 也看不出來自己創建出來的類型
}

var stuObj = createStudent(pObj, "wyatt")
var stuObj = createStudent(pObj, "zz")
