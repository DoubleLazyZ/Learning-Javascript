// 你不知道的Javascript
function foo(el) {
  console.log(el, this.id)
}

var obj = {
  id: 'awesome',
}


;[1, 2, 3].forEach(foo, obj)

// 1 awesome
// 2 awesome
// 3 awesome
