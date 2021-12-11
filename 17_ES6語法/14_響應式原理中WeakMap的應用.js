// 4.應用場景(vue3響應是原理)
const obj1 = {
  name: 'wyatt',
  age: 23,
}

function obj1NameFn1() {
  console.log('obj1NameFn1被執行')
}
function obj1NameFn2() {
  console.log('obj1NameFn2被執行')
}

function obj1AgeFn1() {
  console.log('obj1AgeFn1被執行')
}
function obj1AgeFn2() {
  console.log('obj1AgeFn2被執行')
}

const obj2 = {
  name: 'Wayne',
  height: 1.65,
}

function obj2NameFn1() {
  console.log('obj2NameFn1被執行')
}
function obj2NameFn2() {
  console.log('obj2NameFn2被執行')
}

// 1.創建weakMap
const weakMap = new WeakMap()

// 2.蒐集依賴結構
// 2.1. 對obj1收集的數據結構
const obj1Map = new Map()

obj1Map.set('name', [obj1NameFn1, obj1NameFn2])
obj1Map.set('age', [obj1AgeFn1, obj1AgeFn2])
weakMap.set(obj1, obj1Map)

// 2.2 對obj2收集的數據結構
const obj2Map = new Map()
obj2Map.set('name', [obj2NameFn1, obj2NameFn2])
weakMap.set(obj2, obj2Map)

// 3. 如果obj1.name發生改變
// Proxy / Object.defineProperty
obj1.name = 'Peter'
const targetMap = weakMap.get(obj1)
const fns = targetMap.get('name')
fns.forEach((item) => item())

// 偽code
// const weakMap = new WeakMap();
// const map = new Map();
// map.set(name, [obj1NameFn1, obj1NameFn2]);
// map.set(age, [obj1NameFn1, obj1NameFn2]);

// weakMap.set(obj1, map)

// weakMap.get(obj1)
// map.get(name) -> [fn1, fn2]
// forEach(item => item())
