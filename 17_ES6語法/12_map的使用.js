const obj1 = { name: 'wyatt' }
const obj2 = { name: 'wayne' }

const info = {
  [obj1]: 'aaa',
  [obj2]: 'bbb',
}

// 2.map允許拿對象類型來作為key
// 構造方法創建
const map = new Map()
map.set(obj1, 'aaa')
map.set(obj2, 'bbb')
map.set(1, 'ccc')
console.log(map)

// 要求放入entries
// const map2 = new Map([[key, value], [key, value], [key, value]])
const map2 = new Map([
  [obj1, 'aaa'],
  [obj2, 'bbb'],
  [2, 'yyy'],
])

console.log(map2)

// 3.常見的屬性和方法
console.log(map2.size)

// set
map2.set('wyatt', 'sleep')
console.log(map2)

// get(key)
console.log(map2.get('wyatt'))

// has(key)
console.log(map2.has('wyatt'))

// delete(key)
map2.delete('wyatt')
console.log(map2)

//clear
// map2.clear()
// console.log(map2)

// 4. 遍歷map
map2.forEach((item, key) => {
  console.log(item, key)
})

// 下面拿出來的是陣列
for (const item of map2) {
  console.log(item[0], item[1])
}

for (const [key, value] of map2) {
  console.log(key, value)
}
