const nums = [
  10,
  20,
  30,
  [2, 90],
  [
    [30, 40],
    [32, 99],
  ],
  55,
  [66, 77],
]

const newNums = nums.flat()
const newNums2 = nums.flat(2)

console.log(newNums)
console.log(newNums2)

// 2.flatMap
const nums2 = [10, 20, 30]
const newNums3 = nums2.flatMap((item) => {
  return item * 2
})
const newNums4 = nums2.map((item) => {
  return item * 2
})

console.log(newNums3)
console.log(newNums4)

// 3. flatMap的應用場景
const messages = ['Hello world', 'my name is wyatt', 'my hobby is coding']
// for (const msg in messages) {
//   const msgs = msg.split('')
// }

const words = messages.flatMap((item) => {
  return item.split(' ')
})
console.log(words)
