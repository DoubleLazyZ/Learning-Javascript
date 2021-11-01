function createArray() {
  // var arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  // 一個整數4byte 4個字節
  // 4byte * 1024 = 4kb
  // 4kb* 1024 = 4mb
  // 4M * 100 * 其他的內存
  var arr = new Array(1024 * 1024).fill(1)
  return function() {
    console.log(arr.length)
  }
}


// var arrayFn = createFnArray()
// arrayFn = null

var arrayFns = []
for (var i = 0; i< 100; i++) {
  setTimeout(() => {
    arrayFns.push(createArray())
  }, 100 * i)
}

setTimeout(() => {
  // arrayFns = null
  for (var i = 0; i < 50; i++) {
    setTimeout(() => {
      arrayFns.pop()
    }, 100 * i)
  }
}, 10000)