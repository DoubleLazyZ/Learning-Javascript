class Depend {
  constructor() {
    this.reactiveFns = []
  }

  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn)
  }

  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

// 封裝一個響應式的函數
const depend = new Depend();
function watchFn(fn) {
  depend.addDepend(fn)
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
  const depend = map.get(key);
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
    return Reflect.get(target, key, receiver)
  },
  set: function(target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
    const depend = getDepend(target, key);
    depend.notify();
  }
})

watchFn(function() {
  const newName = obj.name;
  console.log("你好啊");
  console.log("Hello World!被監聽著");
  console.log(obj.name, '原來的obj');
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


objProxy.name = "Wayne";
objProxy.name = "Taka";
objProxy.name = "DoubleZ";

objProxy.age = 100;


const info = {
  phone: 0912123456
}

watchFn(function() {
  console.log(info.phone, "監聽phone變化1。");
})
watchFn(function() {
  console.log(info.phone, "監聽phone變化2。");
})


// ---- 假的code ---
// obj物件
// name: depend
// age: depend
// const objMap = new Map();
// objMap.set("name", "nameDepend");
// objMap.set("age", "ageDepend");

// info物件
// address: depend
// const infoMap = new Map();
// infoMap.set("address", "addressDepend");


// const targetMap = new WeakMap();
// targetMap.set(obj, objMap);
// targetMap.set(info, infoMap);

// // obj.name
// const objDepend = targetMap.get(obj).get("name");
// objDepend.notify();