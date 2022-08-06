var message = "Hello World!"

// with 會形成自己的作用域
var obj = {name: "Wyatt", age: 24, message: "my Obj"}


function foo() {
  function bar() {
    with(obj) {
      console.log(message);
      console.log('-------');
    }
  }
  bar();
}

foo()

var info = {name: "Wayne"}
with(info) {
  console.log(name)
}