function foo() {
  var name = "wyatt"
  var age = 18

  function bar() {
    debugger
    console.log(name)
  }

  return bar
}

var fn = foo()

fn()