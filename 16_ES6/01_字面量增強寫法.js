var name = "Wyatt"
var age = 23

var obj = {
  // property shorthand(屬性的簡寫)
  name,
  age,

  // methods shorthand(方法的簡寫)
  foo: function() {
    console.log(this)
  },
  bar() {
    console.log(this)
  },
  baz: () => {
    console.log(this)
  },

  // 3.computed property names(計算屬性名)
  [name + 123]: "新的寫法"
}


obj.baz()
obj.bar()
obj.foo()

obj[name + 123] = "舊寫法"