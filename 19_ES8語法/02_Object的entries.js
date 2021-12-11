const obj1 = {
  name: 'wyatt',
  age: 23,
}

console.log(Object.entries(obj1))
const objEntries = Object.entries(obj1)
objEntries.forEach((item) => {
  console.log(item[0])
  console.log(item[1])
})

console.log(Object.entries(['abc', 'aaa', 'ccc']))
console.log(Object.entries('aaaaa'))
