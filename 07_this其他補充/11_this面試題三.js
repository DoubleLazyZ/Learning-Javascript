var name = 'window'
function Person (name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
  },
  this.foo2 = () => console.log(this.name),
  this.foo3 = function () {
    return function () {
      console.log(this.name)
    }
  },
  this.foo4 = function () {
    return () => {
      console.log(this.name)
    }
  }
}
var person1 = new Person('person1')
var person2 = new Person('person2')

// person1.foo1() //person1
// person1.foo1.call(person2) //person2

// person1.foo2() // person1: 上層作用域中的this是person1
// person1.foo2.call(person2) //window: 同上call不綁定this

// person1.foo3()() // window: 獨立調用
// person1.foo3.call(person2)() //window:上面的函數綁定this，可是裡面的函數獨立調用
// person1.foo3().call(person2) //person2: 上層的函數獨立調用，返回的函數綁定person2並呼叫


person1.foo4()() //person1
person1.foo4.call(person2)() //person2
person1.foo4().call(person2) //person1