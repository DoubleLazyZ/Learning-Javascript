function add(x, y, z) {
  return x + y + z
}

var result = add(10, 20, 30)
console.log(result)

function sum(x) {
  return function (y) {
    return function (z) {
      return x + y + z
    }
  }
}
var result1 = sum(10)(20)(30)
console.log(result1)

// 簡化Currying過程
var sum2 = (x) => (y) => (z) => {
  return x + y + z
}
console.log(sum2(10)(20)(30))

var sum3 = (x) => (y) => (z) => x + y + z
console.log(sum3(10)(20)(30))
