function foo() {

}

const fooProxy = new Proxy(foo, {
  apply(target, thisArg, argArray) {
    console.log("apply函數進行調用")
    return target.apply(thisArg, argArray)
  },
  construct: function(target, argArray, newTarget) {
    console.log("對foo函數進行new調用")
    return new target(...argArray)
  }
})

foo();

fooProxy.apply({}, ['aaa', 'bbb']);

new fooProxy("aaa", "bbb")