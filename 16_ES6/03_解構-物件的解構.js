var obj = {
  name: "wyatt",
  age: 22,
  height: 1.65
}

// 物件的解構
var { name, age, height} = obj
console.log(name, age, height)

var { age } = obj
console.log(age)

var { name: newName } = obj
console.log(newName)

var { address: newAddress ="台北市"} = obj
console.log(newAddress)

function foo(info) {
  console.log(info.name, info.age)
}

foo(obj)

function bar({name, age}) {
  console.log(name, age)
}

bar(obj)