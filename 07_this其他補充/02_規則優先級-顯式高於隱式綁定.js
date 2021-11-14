// var obj = {
//   name: "obj",
//   foo: function() {
//     console.log(this)
//   }
// }

// obj.foo.apply('aaa');
// obj.foo.call('abc');

// 2.bind 隱式綁定
// var bar = obj.foo.bind('cba');
// bar()


// 3.更明顯的比較
function foo() {
  console.log(this)
}

var obj = {
  name: 'obj',
  foo: foo.bind('aaa')
}

obj.foo()