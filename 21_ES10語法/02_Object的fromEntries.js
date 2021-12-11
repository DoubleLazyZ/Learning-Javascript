const obj = {
  nmae: 'wyatt',
  height: 1.65,
  age: 22,
}

const entries = Object.entries(obj)
console.log(entries)

// const newObj = {...obj}
// for (const entry of entries) {
//   newObj[entry[0]] = entry[1]
// }

// 1. ES10中新增了Object.fromEntries方法
const newObj = Object.fromEntries(entries)
console.log(newObj)

// 2.Object.fromEntries的應用場景
const queryString = 'name=wyatt&age=23'
const queryParams = new URLSearchParams(queryString)
console.log(queryParams)
const paramObj = Object.fromEntries(queryParams)
console.log(paramObj)
