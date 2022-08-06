
class Depend {
  constructor() {
    this.reactiveFns = []
  }

  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn)
  }

  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

// 封裝一個響應式的函數
const depend = new Depend();
function watchFn(fn) {
  depend.addDepend(fn)
}

// let reactiveFns = []
// function watchFn(fn) {
//   reactiveFns.push(fn);
// }

const obj = {
  name: "wyatt",
  age: 24,
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