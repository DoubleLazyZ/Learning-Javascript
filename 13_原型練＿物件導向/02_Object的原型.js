var obj = { name: "wyatt"};

// console.log(obj.address);

// [Object: null prototype] {} 頂層原型
console.log(obj.__proto__) // [Object: null prototype] {}

console.log(obj.__proto__.__proto__) // null
