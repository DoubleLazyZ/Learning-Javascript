const obj = {
  name: 'wyatt',
  age: 24
}

// Object.defineProperty(obj, 'name', {
//   get: function() {
//     console.log("監聽到obj.name被讀取了");
//   },
//   set: function() {
//     console.log("監聽到obj.name被設定新的值");
//   }
// })

Object.keys(obj).forEach(key => {
  let value = obj[key]
  Object.defineProperty(obj, key, {
    get: function() {
      console.log(`監聽到obj.${key}被讀取了`);
      return value
    },
    set: function(newValue) {
      console.log(`監聽到obj.${key}e被設定新的值`);
      value = newValue
    }
  })
})

console.log(obj.name); //get
obj.name = "Wayne"; // set

