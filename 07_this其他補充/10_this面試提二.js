var name = 'window'

var obj = {
  foo: function() {
    // 定義物件的時候不會產生作用域
  }
}


var person1 = {
  name: 'person1',
  foo1: function () {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name)
    }
  },
  foo4: function () {
    return () => {
      console.log(this.name)
    }
  }
}

var person2 = { name: 'person2' }

// person1.foo1();  // person1: 隱式綁定
// person1.foo1.call(person2); //  person2: 顯式綁定 > 隱式綁定

// person1.foo2(); //window: 箭頭函數部綁定this，往上層作用域找是window
// person1.foo2.call(person2); //window 

// person1.foo3()(); //window: 獨立的函數調用
// person1.foo3.call(person2)(); //window: 獨立的函數調用
// person1.foo3().call(person2);  //person2: 最後調用返回函數，使用顯示綁定綁定在person2上

person1.foo4()(); //person1: 箭頭函數不綁定this，上層作用域綁定了一個person1
person1.foo4.call(person2)(); //person2: 上層作用域被顯示綁定了一個person2
person1.foo4().call(person2); //person1: 往上層作用域找是person1