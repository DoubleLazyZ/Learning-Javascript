// 10, 20, 40, 333, 222, 18
// 1.創建Set結構
const set = new Set()
set.add(10)
set.add(20)
set.add(40)
set.add(333)

set.add(10)

// 2. 添加物件時特別注意
// set.add({})
// set.add({})

const obj = {}

set.add(obj)
set.add(obj)

console.log(set)

// 3.給陣列去除重複元素
const arr = [33, 10, 26, 33, 26]
// const newArr = []
// for (const item of arr) {
//   if (newArr.indexOf(item) !== -1) {
//     newArr.push(item)
//   }
// }

const arrSet = new Set(arr)
// const newArr = Array.from(arrSet)
const newArr = [...arrSet]
console.log(newArr)


// 4.size屬性
console.log(arrSet.size)

// 5.set方法
// add
arrSet.add(100)
console.log(arrSet)

// delete
arrSet.delete(33)
console.log(arrSet)

// has
console.log(arrSet.has(100))

// clear
// arrSet.clear()
console.log(arrSet)


// 6.對set進行遍歷
arrSet.forEach(item => {
  console.log(item)
})

for (const item of arrSet) {
  console.log(item)
}