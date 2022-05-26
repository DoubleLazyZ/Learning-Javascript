function add1(x, y, z) {
  return x + y + z
}

function wyCurrying(fn) {
  function carried(...args) {
    // 判斷已經接受到的參數的個數,以及參數本身需要接受的參數是否已經一致了。
    console.log(args)
    // 當已經傳入的參數大於等於需要的參數時,就執行我們的函數
    if (args.length >= fn.length) {
      // fn(...args) 不要這樣調用
      // fn.call(this, ...args)
      return fn.apply(this, args)
    } else {
      // 沒有達到個數時, 需要返回一個新的參數, 繼續來接受函數
      function curried2(...arg2) {
        console.log(...arg2, 'arg2')
        // 接受後到參數後, 需要遞歸調用curried來檢查函數的個數是否達到。
        return carried.apply(this, [...args, ...arg2])
      }
      return curried2
    }
  }
  return carried
}

var curryAdd = wyCurrying(add1)
// console.log(curryAdd(10, 20, 30))
console.log(curryAdd(10, 20)(30))
// curryAdd(10, 20, 30)
// curryAdd(10, 20)(30)
// curryAdd(10)(20)(30)

function foo(x, y, z, m, n) {}
// console.log(foo.length) // 函數.length 是參數的個數

// function test(fn) {
//   function t1(...args) {
//     console.log(...args, 'arg1')
//     function t2(...arg2) {
//       console.log(...arg2, 'arg2')
//     }
//     return t2
//   }
//   return t1
// }

// var tfunc = test(add1)
// console.log(tfunc(10, 20)(30))
