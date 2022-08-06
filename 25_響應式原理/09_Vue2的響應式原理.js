// 封裝一個響應式的函數
let activeReactiveFn = null;

/*
  * depend最佳化
  * 使用Set來保存依賴函數，而不是陣列
*/

class Depend {
  constructor() {
    this.reactiveFns = new Set();
  }

  // addDepend(reactiveFn) {
  //   this.reactiveFns.add(reactiveFn)
  // }

  depend() {
    if (activeReactiveFn) {
      this.reactiveFns.add(activeReactiveFn)
    }
  }

  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}


const depend = new Depend();
function watchFn(fn) {
  // 將函數放到正確的依賴裡面，分配到不同的depend
  activeReactiveFn = fn
  fn()
  activeReactiveFn = null
}

// 封裝一個獲取depend函數
const targetMap = new WeakMap()
function getDepend(target, key) {
  let map = targetMap.get(target);
  // 根據物件取得map的過程
  if(!map) {
    map = new Map();
    targetMap.set(target, map)
  }

  // 根據key獲得depend物件
  let depend = map.get(key);
  if(!depend) {
    depend = new Depend();
    map.set(key, depend);
  }
  return depend;
}

// function reactive(obj) {
//   return new Proxy(obj, {
//     get: function(target, key, receiver) {
//       // 根據target.key獲得depend
//       const depend = getDepend(target, key)
//       // 給depend添加對應的響應函數
//       // depend.addDepend(activeReactiveFn)
//       depend.depend()
  
//       return Reflect.get(target, key, receiver)
//     },
//     set: function(target, key, newValue, receiver) {
//       Reflect.set(target, key, newValue, receiver)
//       const depend = getDepend(target, key);
//       depend.notify();
//     }
//   })
// }

function reactive(obj) {
  Object.keys(obj).forEach(key => {
    let value = obj[key]
    Object.defineProperty(obj, key, {
      get: function() {
        const depend = getDepend(obj, key);
        depend.depend();
        return value
      },
      set: function(newValue) {
        value = newValue;
        const depend = getDepend(obj, key);
        depend.notify();
      }
    })
  })
  return obj
}

const obj = {
  name: "wyatt",
  age: 24,
}

// 監聽物件的屬性變量: Proxy(vue3)/Object.defineProperty(Vue2)
// const objProxy = new Proxy(obj, {
//   get: function(target, key, receiver) {
//     // 根據target.key獲得depend
//     const depend = getDepend(target, key)
//     // 給depend添加對應的響應函數
//     // depend.addDepend(activeReactiveFn)
//     depend.depend()

//     return Reflect.get(target, key, receiver)
//   },
//   set: function(target, key, newValue, receiver) {
//     Reflect.set(target, key, newValue, receiver)
//     const depend = getDepend(target, key);
//     depend.notify();
//   }
// })


const info = {
  phone: "0912123456",
  height: 1.65
}

const infoProxy = reactive(info);


watchFn(() => {
  console.log(infoProxy.phone)
})

infoProxy.phone = "0911111111"


