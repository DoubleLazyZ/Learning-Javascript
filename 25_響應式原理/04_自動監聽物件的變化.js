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
