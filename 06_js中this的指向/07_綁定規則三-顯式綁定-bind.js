var obj = {
  foo: function () {
    console.log(this)
  },
}

obj.foo.call('abc')
// 顯式綁定大於隱式綁定

function foo() {
  console.log(this)
}

// foo.call('aaa')
// foo.call('aaa')
// foo.call('aaa')
// foo.call('aaa')

// 默認綁定和顯式綁定衝突
// 顯式綁定大於隱式綁定

var newFoo = foo.bind('aaa')

newFoo()
