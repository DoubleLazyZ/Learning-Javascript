function sum(m, n) {
  return m + n
}

console.log(sum(5, 10))
console.log(sum(5, 1000))
console.log(sum(5, 699))

function makeAdder(count) {
  return function (num) {
    return count + num
  }
}

var result = makeAdder(5)(10)
console.log(result)

var adder5 = makeAdder(5)
adder5(10)
adder5(14)
adder5(1010)
