// FinalizationRegister
const finalRegister = new FinalizationRegistry((value) => {
  console.log('註冊在FinalizationRegistry的很多物件中，有物件被銷毀', value)
})
let obj = { name: 'wyatt' }
let info = { age: 23 }

finalRegister.register(obj, 'obj')
finalRegister.register(info, 'value')

obj = null
info = null
