var name = "window";
var person = {
  name: "person",
  sayName: function () {
    console.log(this.name);
  }
};
function sayName() {
  var sss = person.sayName;
  sss();  // window: 獨立函數調用 
  person.sayName(); // person: 隱式綁定 
  (person.sayName)(); // person: 隱式綁定 
  (b = person.sayName)(); // window: 賦值表達式，特殊狀況，間接函數調用 
}
sayName();

//  window
//  person
//  window 答錯 正解圍person
//  window