// 1.setTimeout

// function mySetTimeout(fn, duration) {
//   fn()
// }

// mySetTimeout(function() {
//   console.log(this) //window
// }, 3000)

setTimeout(function() {
  console.log(this) //window
}, 2000)


// 2.監聽點擊
const box = document.querySelector('.box');
console.log(box)
box.onclick = function() {
  console.log(this)
  // box.onClick()類似像這樣的隱式綁定
}

box.addEventListener('click', function() {
  console.log(this)
})
box.addEventListener('click', function() {
  console.log(this)
})
box.addEventListener('click', function() {
  // fn.call(box) 像是這樣
  console.log(this)
})

// 3.陣列.forEach/map/filter/find
var names = ['abc', 'bbb', 'qwe']
names.forEach(function(item) {
  console.log(item, this)
}, box)

names.map(function(item) {
  console.log(item, this)
}, "ccc")