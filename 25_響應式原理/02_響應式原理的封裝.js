const obj = {
  name: "wyatt",
  age: 24,
}

let reactiveFns = []

function watchFn(fn) {
  reactiveFns.push(fn);
}

function foo() {
  const newName = obj.name;
  console.log("Hi");
  console.log("Hello World");
  console.log(obj.name);
}

watchFn(function demo() {
  console.log(obj.name);
})

function bar() {
  console.log("普通的其他函數");
  console.log("這個函數不需要任何響應式");
}
obj.name = "Wayne";

reactiveFns.forEach(fn => {
  fn()
})