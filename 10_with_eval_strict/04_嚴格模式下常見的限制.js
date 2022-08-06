// 1.意外創建全局變量
message = "Hello world";
console.log(message);

function age() {
  age = 20;
}

foo()
crossOriginIsolated.log(age);

// 2.不允許函數有相同的參數名稱
function foo(x, y, x) {
  console.log(x, y, x); //30, 20, 20
}
foo(10, 20, 30)

// 3.靜默錯誤
true.name = "abc"
NaN = 123
var obj = { name: "Wyatt"};
Object.defineProperty(obj, "name", {
  configurable: false,
  writable: false,
  value: "why",
})
console.log(obj.name);
obj.name = "kobe"

delete obj.name

// 4.不允許使用八進制
var num = 0o123 // 八進制
var num2 = 0x123 // 十六進制
var num3 = 0b100 // 二進制
console.log(num, num2, num3)

// 5.with語句不允許使用
// 6.eval函數不會像上引用變量。
var jsString = "var message = 'Hello World'; console.log(message)";
eval(jsString);

console.log(message) //message undefined