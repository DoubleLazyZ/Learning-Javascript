var obj = {
  name: "obj",
  foo: function() {
    console.log(this)
  }
}

// new的優先級高於隱式綁定
var f = new obj.foo()
