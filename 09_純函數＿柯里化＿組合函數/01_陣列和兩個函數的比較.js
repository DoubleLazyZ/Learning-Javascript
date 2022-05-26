var names = ['aaa', 'bbb', 'ccc', 'ddd']

// slice只要傳入一個start/end，對於同一個陣列來說，他會給我們返回確定的值
// slice函數本身它不會改變原來的陣列
// slice -> this
// slice函數本身就是一個純函數
var newNames1 = names.slice(0, 3)
console.log(newNames1)
console.log(names)

// splice就不是一個純函數

var newNames2 = names.splice(2)
console.log(newNames2)
console.log(names)

var adder5 = makeAdder(5)
adder5(10)
adder5(14)
