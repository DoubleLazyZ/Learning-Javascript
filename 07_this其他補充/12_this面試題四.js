var name = 'window'
function Person (name) {
  this.name = name
  this.obj = {
    name: 'obj',
    foo1: function () {
      return function () {
        console.log(this.name)
      }
    },
    foo2: function () {
      return () => {
        console.log(this.name)
      }
    }
  }
}
var person1 = new Person('person1')
var person2 = new Person('person2')

person1.obj.foo1()() //window
person1.obj.foo1.call(person2)() //window
person1.obj.foo1().call(person2) //person2，最後的函數綁定到person2的物件上

person1.obj.foo2()() //obj foo2由obj調用，所以是綁定obj，往上層作用域找是foo2，所以是obj
person1.obj.foo2.call(person2)() //person2 foo2綁定person2，之後函數往上層作用域找
person1.obj.foo2().call(person2) //obj