var message = 'Hello global'

function foo() {
  console.log(message)
}

function bar() {
  var message = 'Hello bar'
  foo()
}

bar()
