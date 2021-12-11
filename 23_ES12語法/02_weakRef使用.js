// ES12: WeakRef類
// WeakRef.prototype.deref
// 如果原物件沒有被銷毀，可以獲得原物件
// 如果原物件被銷毀，那麼獲取到的就是undefined
const finalRegister = new FinalizationRegistry((value) => {
  console.log('註冊在FinalizationRegistry的很多物件中，有物件被銷毀', value)
})
let obj = { name: 'wyatt' }
const info = new WeakRef(obj)
// let info = new WeakSet()
// info.add(obj)
console.log(info.deref().name)
finalRegister.register(obj, 'obj')

// obj = null

setTimeout(() => {
  console.log(info.deref()?.name)
  console.log(info.deref() && info.deref().name)
}, 10000)
