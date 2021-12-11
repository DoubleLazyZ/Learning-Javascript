const obj1 = { name: 'obj1' }
const obj2 = { name: 'obj2' }

// 1.區別一，WeakMap不能使用物件以外的值當作key

// 2.WeakMap和Map的區別二
const map = new Map()
map.set(obj, 'aaa')

const weakMap = new WeakMap()
weakMap.set(obj, 'aaa')

// 3.常見的方法
console.log(weakMap.get(obj))

console.log(weakMap.has(obj))

console.log(weakMap)
console.log(weakMap.delete(obj))
console.log(weakMap)
