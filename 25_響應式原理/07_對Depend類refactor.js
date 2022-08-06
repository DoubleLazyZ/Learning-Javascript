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

const obj = {
  name: "wyatt",
  age: 24,
}

// 監聽物件的屬性變量: Proxy(vue3)/Object.defineProperty(Vue2)
const objProxy = new Proxy(obj, {
  get: function(target, key, receiver) {
    // 根據target.key獲得depend
    const depend = getDepend(target, key)
    // 給depend添加對應的響應函數
    // depend.addDepend(activeReactiveFn)
    depend.depend()

    return Reflect.get(target, key, receiver)
  },
  set: function(target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
    const depend = getDepend(target, key);
    depend.notify();
  }
})

watchFn(function() {
  console.log("-----function1 start-----")
  console.log("你好啊");
  console.log("Hello World!被監聽著");
  console.log(objProxy.name, '原來的obj');
  console.log("-----function1 end-----")
})

watchFn(function() {
  console.log(objProxy.name, "---demo function---");
})

watchFn(function() {
  console.log(objProxy.age, "---age變化 function1---");
})

watchFn(function() {
  console.log(objProxy.age, "---age變化 function2---");
})

watchFn(function() {
  console.log(objProxy.name, '新函數name被蒐集');
  console.log(objProxy.age, '新函數age被蒐集');
})

watchFn(() => {
  console.log(objProxy.name, "--------------");
  console.log(objProxy.name, "++++++++++++++++")
})

console.log('-------------改變obj的name值-----------------');
objProxy.name = "DoubleZ"

